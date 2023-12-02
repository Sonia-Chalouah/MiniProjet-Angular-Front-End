import { StatistiqueFoyerComponent } from './statistique-foyer/statistique-foyer.component';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { RouterModule, Routes } from '@angular/router';
import { FoyerComponent } from './foyer/foyer.component';
import { AjouterFoyerComponent } from './ajouter-foyer/ajouter-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { DetailsFoyerComponent } from './details-foyer/details-foyer.component';

const routes: Routes = [  {path: "", component: FoyerComponent},
{ path: 'AjouterFoyer', component: AjouterFoyerComponent },
{ path: 'foyer', component: FoyerComponent },
{ path: 'updateFoyer', component: UpdateFoyerComponent },
{ path: 'DetailsFoyer/:id', component: DetailsFoyerComponent },
{ path: 'StatisticFoyer', component: StatistiqueFoyerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
