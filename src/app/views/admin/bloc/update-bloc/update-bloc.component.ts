import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import {  ReactiveFormsModule } from '@angular/forms';
import { Foyer } from 'src/app/Model/Foyer';
import { BlocService } from 'src/app/service/bloc.service';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  updateForm: FormGroup;
  bloc:Bloc = new Bloc; 

constructor (private route:ActivatedRoute, private blocService:
  BlocService , private router:Router ,  private fb: FormBuilder) {}
  ngOnInit(): void {
    const blocId = this.route.snapshot.paramMap.get('id');
    if (blocId) {
      this.blocService.getBlocById(+blocId).subscribe(existingBloc => {
        this.bloc = existingBloc;
        this.updateForm = this.fb.group ({
          idBloc : [this.bloc.idBloc,Validators.required],
          nomBloc : [this.bloc.nomBloc, Validators.required],
          capaciteBloc:[this.bloc.capaciteBloc, Validators.required],
          foyer : this.fb.group ({
            idFoyer : [this.bloc.foyer.idFoyer, Validators.required]
          }),
        });
      });
    }
    }

    updateBloc() {
      if (this.updateForm.invalid) {
        // Handle invalid form
        return;
      }

      const updatedBloc: Bloc= this.updateForm.value;
      this.blocService.updateBloc(updatedBloc).subscribe(()=> {
        console.log('Bloc updated successfuly');
        this.router.navigate(['/admin/bloc/blocs'])
      });
    }
    
    }