import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChambreRoutingModule } from './chambre-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { ContactComponent } from 'src/frontoffice/contact/contact.component';
import { NavbarComponent } from 'src/frontoffice/navbar/navbar.component';


@NgModule({
  declarations: [
    AddChambreComponent,
    GetChambreComponent,
    DetailsChambreComponent,
    UpdateChambreComponent,
    ContactComponent



  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ChambreModule { }
