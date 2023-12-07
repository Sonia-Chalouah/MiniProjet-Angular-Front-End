import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Bloc } from 'src/app/Model/Bloc';
import { Chambre } from 'src/app/Model/Chambre';
import { Foyer } from 'src/app/Model/Foyer';
import { BlocService } from 'src/app/service/bloc.service';

@Component({
  selector: 'app-details-bloc',
  templateUrl: './details-bloc.component.html',
  styleUrls: ['./details-bloc.component.css']
})
export class DetailsBlocComponent implements OnInit {

  bloc: Bloc | undefined;
  chambres : Chambre [] = [];
  foyers: Foyer [] = [];
  constructor ( private activatedRoute :ActivatedRoute,
    private blocService:BlocService, private router:Router) {}
ngOnInit() {
  this.activatedRoute.params.subscribe(params=> {
    const id = params ['id'];
    this.getBlocDetails(id);
    this.getChambresByBloc(id);
    this.getFoyerByBlocId(id);
  });
}
getChambresByBloc(id: number): void {
  this.blocService.getChambresByBloc(id).subscribe(chambres => {
    this.chambres = chambres;
  });
}
getBlocDetails(id: number): void {
  this.blocService.getBlocById(id).subscribe(bloc => {
    this.bloc=bloc;
    console.log ('Bloc:' , this.bloc)
  });
}
getFoyerByBlocId(id: number): void {
  this.blocService.getFoyerByBlocId(id).subscribe(foyer => {
    this.foyers = [foyer];
  });
}


}