import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule, Routes } from '@angular/router';
import { UniversiteComponent } from './universite/universite.component';
import { AjouterUniversiteComponent } from './ajouter-universite/ajouter-universite.component';
import { ModifierUniversiteComponent } from './modifier-universite/modifier-universite.component';
import { OussemaDetailsComponent } from './oussema-details/oussema-details.component';

const routes: Routes = [  {path: "", component: UniversiteComponent},
{path: "Ajouter", component: AjouterUniversiteComponent}, 
{path: "Modifier/:id", component: ModifierUniversiteComponent},
{path: "details", component: OussemaDetailsComponent}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
