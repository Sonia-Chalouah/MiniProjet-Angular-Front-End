import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { ContactComponent } from 'src/frontoffice/contact/contact.component';

const routes: Routes = [

  {path:'', component: GetChambreComponent},
  { path: 'detail', component: DetailsChambreComponent },
  { path: 'Ajouter', component: AddChambreComponent },
  { path: 'updateChambre/:id', component: UpdateChambreComponent },
  { path: 'contact', component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
