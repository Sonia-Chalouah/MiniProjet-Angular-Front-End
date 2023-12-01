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



@NgModule({
  declarations: [
    AddBlocComponent,
    UpdateBlocComponent,
    ListBlocComponent,
    DetailsBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    LayoutsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
   
  ]
})
export class BlocModule { }
