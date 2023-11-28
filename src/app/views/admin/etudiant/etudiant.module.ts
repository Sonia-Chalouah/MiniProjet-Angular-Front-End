import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import { EtudiantComponent } from './etudiants/etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailComponent } from './detail/detail.component'; 




@NgModule({
  declarations: [
    EtudiantComponent,
    AjouterEtudiantComponent,
    UpdateEtudiantComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    PdfViewerModule,
    MatPaginatorModule , 
    NgxPaginationModule
  ]
})
export class EtudiantModule { }
