import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { FiltrageComponent } from './filtrage/filtrage.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { ReservationsDetailsComponent } from './reservations-details/reservations-details.component';


@NgModule({
  declarations: [ 
    ReservationComponent,
    FiltrageComponent,
    ShowReservationComponent,
    ReservationsDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
    
  ]
})
export class ReservationModule { }
