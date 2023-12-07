import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserRoutingModule } from './views/front/user/user-routing.module';
import { BodyComponent } from 'src/frontoffice/body/body.component';
import { ContactComponent } from 'src/frontoffice/contact/contact.component';
import { LoginComponent } from './views/front/user/login/login.component';
import { RegisterComponent } from './views/front/user/register/register.component';

import { AuthGuard } from '../app/views/front/user/guard/auth.guard';
import { RouaFrontComponent } from 'src/frontoffice/roua-front/roua-front.component';
import { GetBlocsComponent } from 'src/frontoffice/get-blocs/get-blocs.component';
import { DetailComponent } from './views/admin/etudiant/detail/detail.component';
import { FoyerComponent } from './views/admin/foyer/foyer/foyer.component';
import { GetFoyersComponent } from 'src/frontoffice/oussema/get-foyers.component';




const routes: Routes = [

  
  {path:"Acceuil", component:FrontLayoutComponent, children:[
      {path:"", loadChildren:()=>import("./views/front/home/home.module").then(m=>m.HomeModule)},
      {path:"user", loadChildren:()=>import("./views/front/user/user.module").then(m=>m.UserModule)},

    ]},
  {path:"", canActivate:[AuthGuard] , component: BodyComponent},
  {path:"contact",component: ContactComponent},
  {path:"getfoyer",component: GetFoyersComponent},
  {path : "roua/:id" , component: RouaFrontComponent},
  {path : "getblocs" , component: GetBlocsComponent},
  {path : "listfoyer" , component: FoyerComponent},
  {path:"admin",component: AdminLayoutComponent, children: [

       {path:"dashboard",canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/dashboard/dashboard.module").then(m=>m.DashboardModule)},    
       {path:"login", canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/login-admin/login-admin.module").then(m=>m.LoginAdminModule)},
       {path:"universite", canActivate:[AuthGuard]  ,   loadChildren:()=>import ("./views/admin/universite/universite.module").then(m=>m.UniversiteModule)}, 
       {path:"reservation",  canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/reservation/reservation.module").then(m=>m.ReservationModule)},
       {path:"foyer", canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/foyer/foyer.module").then(m=>m.FoyerModule)},
       {path:"etudiant", canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/etudiant/etudiant.module").then(m=>m.EtudiantModule)},
       {path:"chambre", canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/Chambre/chambre.module").then(m=>m.ChambreModule)},
       {path:"bloc", canActivate:[AuthGuard]  ,  loadChildren:()=>import ("./views/admin/bloc/bloc.module").then(m=>m.BlocModule)}

       
       
  ]},
  
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
