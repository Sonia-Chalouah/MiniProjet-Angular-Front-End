// details-bloc.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { BlocService } from 'src/app/service/bloc.service';

@Component({
  selector: 'app-details-bloc',
  templateUrl: './details-bloc.component.html',
  styleUrls: ['./details-bloc.component.css']
})
export class DetailsBlocComponent {
  bloc: Bloc[] = [];
  constructor(
    private BlocService: BlocService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      // Utilisez l'ID comme nécessaire dans votre composant
      console.log(id); // Vérifiez si l'ID est correctement récupéré
    });
  
    this.getAllBloc();
  }
  getAllBloc() {
    this.BlocService.getAllblocs().subscribe(
      reponse => this.bloc = reponse
    );
  }

  parentDeleteBloc(bloc: Bloc): void  {
    if (confirm('Are you sure you want to delete this bloc ?')) {
      this.BlocService.deleteBloc(bloc).subscribe(
        () => {
          console.log('bloc deleted successfully');
          // Recharger les données DataTables
          Swal.fire({
            title: 'Succès!',
            text: 'bloc a été supprimé avec succès',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            // Optionally, reload the bloc list or navigate to another route
            this.getAllBloc();
            this.router.navigate(['/details']);
          });
        },
        (error) => {
          console.error('Error deleting bloc', error);
          // Handle error as needed
        }
      );
    }
  }
}