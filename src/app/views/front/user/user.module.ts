import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AjouterReservationComponent } from './Reservation/ajouter-reservation/ajouter-reservation.component';
import { ReservationsComponent } from './Reservation/reservations/reservations.component';
import { ShowComponent } from './Reservation/show/show.component';

import { GetUniversiteComponent } from './get-universite/get-universite.component';






@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AjouterReservationComponent,
    ReservationsComponent,
    ShowComponent,
   

    GetUniversiteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatButtonModule,
        MatTableModule,MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        ToastrModule.forRoot({
          timeOut: 3000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        })  ]
})
export class UserModule { }