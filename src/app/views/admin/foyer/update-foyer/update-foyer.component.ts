import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { Bloc } from 'src/app/Model/Bloc';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/service/foyer.service';
@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css']
})
export class UpdateFoyerComponent implements OnInit {
  foyerId!: number;
  selectedBlocId!: string;
  selectedUniversite!: string;
  updatedFoyer!: Foyer;

  universities$: Observable<Universite[]>;
  bloc$: Observable<Bloc[]>;
  selectedUniversity: Universite | null = null;
  universiteList: Universite[] = [];
  blocList: Bloc[] = [];


  constructor(
    private route: ActivatedRoute,
    private foyerService: FoyerService,
    private router: Router
  ) {
    this.universities$ = this.foyerService.getAlluniversities();
    this.bloc$ = this.foyerService.getAllblocs();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.foyerId = params['id'];
     // this.selectedBlocId = params['selectedBlocId'];
      this.selectedUniversite = params['selectedUniversite'];

      this.foyerService.getFoyerById(this.foyerId).subscribe(
        (foyer: Foyer) => {
          this.updatedFoyer = foyer;

          this.selectedUniversity = this.universiteList.find(universite => universite.nomUniversite === this.selectedUniversite) || null;

          if (this.selectedUniversity) {
            this.updatedFoyer.universite.nomUniversite = this.selectedUniversity.nomUniversite;
          }
        },
        (error) => {
          console.error('Error fetching foyer data:', error);
        }
      );
    });

    this.loadUniversities();
   // this.loadBloc();
  }

  loadUniversities() {
    this.universities$ = this.foyerService.getAlluniversities(); // Update the universities$ observable

    this.universities$.subscribe(
      (universities) => {
        this.universiteList = universities;
        this.selectedUniversity = this.universiteList.find(universite => universite.nomUniversite === this.selectedUniversite) || null;
      },
      (error) => {
        console.error('Error loading universities:', error);
      }
    );
  }

 /* loadBloc() {
    this.bloc$.subscribe(
      (blocs) => {
        this.blocList = blocs;
      },
      (error) => {
        console.error('Error loading blocs:', error);
      }
    );
  }*/



  updateFoyer(): void {
    if (!this.updatedFoyer.nomFoyer ||!this.updatedFoyer.capaciteFoyer || !this.selectedUniversite  ) {
      Swal.fire('Error', 'Required fields are missing', 'error');
      return;
    }

    if (this.updatedFoyer.capaciteFoyer <= 0) {
      Swal.fire('Error', 'Number must be positive', 'error');
      return;
    }

    this.foyerService.updateFoyerAndAssociateUniversite(
      this.foyerId,
      this.selectedUniversite,
      this.updatedFoyer
    ).subscribe(
      (updatedFoyer: Foyer) => {
        console.log('Foyer updated:', updatedFoyer);
        this.router.navigate(['/admin/foyer']);
        // Perform any additional actions after updating the foyer
      },
      (error) => {
        console.error('Error updating foyer:', error);
        if (error.status === 500) {
          Swal.fire('Error', 'University already exists', 'error');
        } else if (error.error && error.error.fieldName === 'nomUniversite') {
          Swal.fire('Error', 'University already exists', 'error');
        } else {
          Swal.fire('Error', 'Error updating foyer', 'error');
        }
      }
    );
  }}


