import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { CommonModule } from '@angular/common';
import { BlocService } from 'src/app/service/bloc.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  updateForm!: FormGroup;
  bloc : Bloc = new Bloc;
  constructor( private BlocService : BlocService,
  
    private route:ActivatedRoute,
    private router:Router)
    {}
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.bloc.idBloc = params['idEtudiant'];
        this.bloc.capaciteBloc = params['nomEt'];
        this.bloc.nomBloc = params['prenomEt'];
        this.bloc.foyer.idFoyer = params['cin'];
      })
  
    }
    ModifierBloc() {
      console.log(this.bloc)
      this.BlocService.updateBloc(this.bloc).subscribe(
        (res: Bloc) => {
          localStorage.clear();
          this.router.navigate(['admin/bloc/blocs']);
          console.log('etudiant Modifier Avec succées:', res);
          
          // Handle success, update UI, or show a success message to the user
        },
        (error) => {
          console.error('Error modifier etudiant :', error);
          // Handle error, show an error message to the user
        }
      );
      }
   
  }