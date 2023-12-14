import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { BodyComponent } from 'src/frontoffice/body/body.component';



import { AddComponent } from './views/admin/terrain/add/add.component';
import { UpdateComponent } from './views/admin/terrain/update/update.component';
import { ListComponent } from './views/admin/terrain/list/list.component';
import { AddCommandComponent } from './views/admin/commande/add-command/add-command.component';
import { UpdateCommandComponent } from './views/admin/commande/update-command/update-command.component';
import { ListCommandComponent } from './views/admin/commande/list-command/list-command.component';
import { AddProduitComponent } from './views/admin/produit/add-produit/add-produit.component';
import { UpdateProduitComponent } from './views/admin/produit/update-produit/update-produit.component';
import { ListProduitComponent } from './views/admin/produit/list-produit/list-produit.component';
import { AddEventComponent } from './views/admin/event/add-event/add-event.component';
import { UpdateEventComponent } from './views/admin/event/update-event/update-event.component';
import { ListEventComponent } from './views/admin/event/list-event/list-event.component';
import { AddReclamationComponent } from './views/admin/reclamation/add-reclamation/add-reclamation.component';
import { UpdateReclamationComponent } from './views/admin/reclamation/update-reclamation/update-reclamation.component';
import { ListReclamationComponent } from './views/admin/reclamation/list-reclamation/list-reclamation.component';
import { AddReservationComponent } from './views/admin/reservation/add-reservation/add-reservation.component';
import { UpdateReservationComponent } from './views/admin/reservation/update-reservation/update-reservation.component';
import { ListReservationComponent } from './views/admin/reservation/list-reservation/list-reservation.component';




const routes: Routes = [


  {path:"Acceuil", component:FrontLayoutComponent, children:[
      {path:"", loadChildren:()=>import("./views/front/home/home.module").then(m=>m.HomeModule)},
   

    ]},
  {path:"", component: BodyComponent},

  {path:"admin",component: AdminLayoutComponent, children: [

       {path:"dashboard",  loadChildren:()=>import ("./views/admin/dashboard/dashboard.module").then(m=>m.DashboardModule)},

  ]},

  {path : "addterrain" , component: AddComponent},
  {path : "updateterrain" , component: UpdateComponent},
  {path : "terrains" , component: ListComponent},

  {path : "addcommande" , component: AddCommandComponent},
  {path : "updatecommande" , component: UpdateCommandComponent},
  {path : "commandes" , component: ListCommandComponent},

  {path : "addproduit" , component: AddProduitComponent},
  {path : "updateproduit" , component: UpdateProduitComponent},
  {path : "prouits" , component: ListProduitComponent},

  {path : "addevent" , component: AddEventComponent},
  {path : "updateevent" , component: UpdateEventComponent},
  {path : "events" , component: ListEventComponent},

  {path : "addreclamation" , component: AddReclamationComponent},
  {path : "updatereclamation" , component: UpdateReclamationComponent},
  {path : "reclamations" , component: ListReclamationComponent},

  {path : "addreservation" , component: AddReservationComponent},
  {path : "updatereservation" , component: UpdateReservationComponent},
  {path : "reservations" , component: ListReservationComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
