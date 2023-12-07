import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { FiltrageComponent } from './filtrage/filtrage.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';


const routes: Routes = [
  {path: "", component: ReservationComponent},
  { path:'filtrer', component: FiltrageComponent},
  { path:'show', component: ShowReservationComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }


