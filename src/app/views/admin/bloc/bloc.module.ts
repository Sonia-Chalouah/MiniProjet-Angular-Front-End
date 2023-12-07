import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocRoutingModule } from './bloc-routing.module';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { ListBlocComponent } from './list-bloc/list-bloc.component';
import { DetailsBlocComponent } from './details-bloc/details-bloc.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { GetBlocsComponent } from 'src/frontoffice/get-blocs/get-blocs.component';




@NgModule({
  declarations: [
    AddBlocComponent,
    UpdateBlocComponent,
    ListBlocComponent,
    DetailsBlocComponent,
    GetBlocsComponent,

  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
    
   
  ]
})
export class BlocModule { }
