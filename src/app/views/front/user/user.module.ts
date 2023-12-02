import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MaterialModule } from 'src/material.module';
import { ToastrModule } from 'ngx-toastr';






@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
  
    PdfViewerModule,
    ToastrModule,
    ToastrModule.forRoot(),

  ]
})
export class UserModule { }
