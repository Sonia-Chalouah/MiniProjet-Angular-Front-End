import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { Foyer } from 'src/app/Model/Foyer';
import { BlocService } from 'src/app/service/bloc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capaciteBloc: 0,
    chambres: [], // Renamed to match the entity class
    foyer: new Foyer(), // Make sure to initialize the Foyer object
    numeroChambre: 0
  };

  constructor(private service: BlocService, 
    private router: Router) {}

  @Output() passId = new EventEmitter<number>();

  deleteBloc(id: number) {
    this.passId.emit(id);
  }

  detailBloc(id: number) {
    this.router.navigate(['/details', id]);
  }

  ngOnInit() {}
}