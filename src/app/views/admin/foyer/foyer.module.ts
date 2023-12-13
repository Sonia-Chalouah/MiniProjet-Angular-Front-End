import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { FoyerRoutingModule } from './foyer-routing.module';
import { FoyerComponent } from './foyer/foyer.component';
import { FormsModule } from '@angular/forms';
import { AjouterFoyerComponent } from './ajouter-foyer/ajouter-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { StatistiqueFoyerComponent } from './statistique-foyer/statistique-foyer.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetFoyersComponent } from 'src/frontoffice/oussema/get-foyers.component';
import { DetailsFoyerComponent } from './details-foyer/details-foyer.component';
import { FoyerDetailsssComponent } from './foyer-detailsss/foyer-detailsss.component';


@NgModule({
  declarations: [
    FoyerComponent,
    AjouterFoyerComponent,
    UpdateFoyerComponent,
    StatistiqueFoyerComponent,
    GetFoyersComponent,
    DetailsFoyerComponent,
    FoyerDetailsssComponent
  ],
  imports: [
    CommonModule,
    FoyerRoutingModule,MatIconModule,FormsModule,
    MatPaginatorModule , 
    NgxPaginationModule
  ]
})
export class FoyerModule { }
