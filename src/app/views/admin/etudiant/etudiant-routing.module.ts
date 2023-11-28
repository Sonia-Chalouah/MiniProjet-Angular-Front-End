import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiants/etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{path: "", component: EtudiantComponent},
{path: "Ajouter", component: AjouterEtudiantComponent} , 
{path: "Update/:idEtudiant/:nomEt/:prenomEt/:cin/:ecole/:dateNaissance ",component: UpdateEtudiantComponent} , 
{path: "detail/:idEtudiant/:nomEt/:prenomEt/:cin/:ecole/:dateNaissance", component: DetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }


