import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlocComponent } from './list-bloc/list-bloc.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { DetailsBlocComponent } from './details-bloc/details-bloc.component';

const routes: Routes = [
{path: "", component:ListBlocComponent},
{path: "addBloc", component: AddBlocComponent} , 
{path: "UpdateBloc ",component: UpdateBlocComponent} , 
{path: "detailbloc", component: DetailsBlocComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
