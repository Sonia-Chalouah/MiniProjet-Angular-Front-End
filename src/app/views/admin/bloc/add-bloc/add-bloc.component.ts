import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { Foyer } from 'src/app/Model/Foyer';
import { BlocService } from 'src/app/service/bloc.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit{
  bloc : Bloc=  new Bloc ();

  constructor(private blocService: BlocService, 
    private router: Router) {}
    

    ngOnInit(): void {
      this.initializeBloc();
       }
    
    initializeBloc():void{

        this.bloc=new Bloc();
        this.bloc.foyer=new Foyer();
       }
  saveBloc() {
    this.blocService.createBloc(this.bloc).subscribe(
      (response) => {
        console.log(response);
      },
    );
  }
  goToBlocList(): void {
    this.router.navigate(['/admin/bloc']);
  }
  
  onSubmit(): void {
    console.log(this.bloc);
    this.saveBloc();
   this.goToBlocList();
  }

}