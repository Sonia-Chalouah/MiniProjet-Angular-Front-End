
import { Component,OnInit } from '@angular/core';
  import { FoyerService } from '../../../../service/foyer.service';
  import { Foyer } from '../../../../Model/Foyer';
  import { Universite } from '../../../../Model/Universite';
  import Swal from 'sweetalert2';
  import { Router } from '@angular/router';
  import { Observable, of } from 'rxjs';
import { Bloc } from 'src/app/Model/Bloc';
  @Component({
    selector: 'app-ajouter-foyer',
    templateUrl: './ajouter-foyer.component.html',
    styleUrls: ['./ajouter-foyer.component.css']
  })
  export class AjouterFoyerComponent implements OnInit  {

    universite!:  Universite; // Create a new instance of Universite
    // Create a new instance of Foyer
   foyer!: Foyer;
   universiteId: number = 0;

   universities$: Observable<Universite[]> = of([]);
   bloc$: Observable<Bloc[]> = of([]);
   blocs: Bloc[] = [];
   selectedUniversity: Universite | null = null;
   selectedBloc: Bloc | null = null;
   err: any;
   errorMessage: string = ''
   constructor(private foyerService: FoyerService, private router: Router) {
     this.foyer = new Foyer(); // Create a new instance of Foyer
     this.foyer.idFoyer = 0;
     this.foyer.nomFoyer = '';
     this.foyer.capaciteFoyer = 0;
     this.foyer.blocs = [];
     this.foyer.nomBloc = '';
     this.foyer.universiteName = '';
     this.foyer.universiteId = 0;
    // this.foyer.universite = universite;
   }

   ngOnInit() {
     this.loadUniversities();
     this.loadBlocs();
   }

   loadUniversities() {
     this.universities$ = this.foyerService.getAlluniversities();
   }

   loadBlocs() {
     this.bloc$ = this.foyerService.getAllblocs();
     this.bloc$.subscribe(
       (blocs) => {
         this.blocs = blocs;
       },
       (error) => {
         console.error('Error loading blocs:', error);
       }
     );
   }

   goToFoyerList() {
     this.router.navigate(['/admin/foyer']);
   }



   ajouterFoyerEtAffecterAUniversite() {
     this.err = null; // Reset the error object

     if (!this.foyer || !this.selectedUniversity) {
       this.err = { errors: { required: true } };
       Swal.fire('Error', 'Required error message', 'error');
       return;
     }

     if (this.foyer.capaciteFoyer <= 0) {
       this.err = { errors: { positive: true } };
       Swal.fire('Error', 'Number must be positive', 'error');
       return;
     }

     this.foyerService.addFoyerEtAffecterAUniversiteByName(this.foyer, this.selectedUniversity.nomUniversite)
       .subscribe(
         (foyer) => {
           console.log('Foyer added and affected to Universite:', foyer);
           this.router.navigate(['/admin/foyer']);
         },
         (error) => {
           if (error.status === 500) {
             this.err = { errors: { alreadyExists: true }, error: { fieldName: 'university' } };
             Swal.fire('Error', 'University already exists', 'error');
           } else if (error.error && error.error.fieldName === 'nomUniversite') {
             this.err = { errors: { alreadyExists: true }, error: { fieldName: 'university' } };
             Swal.fire('Error', 'University already exists', 'error');
           } else {
             this.err = { errors: { generalError: true }, error: { message: 'Error adding foyer and affecting to Universite: ' + error.message } };
             Swal.fire('Error', this.err.error.message, 'error');
           }
         }
       );
   }


  }
