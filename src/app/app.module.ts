import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';

/*import { AddChambreComponent } from './views/admin/Chambre/add-chambre/add-chambre.component';
import { GetChambreComponent } from './views/admin/Chambre/get-chambre/get-chambre.component';
import { DetailsChambreComponent } from './views/admin/Chambre/details-chambre/details-chambre.component';
import { UpdateChambreComponent } from './views/admin/Chambre/update-chambre/update-chambre.component';
import { ChambreModule } from './views/admin/Chambre/chambre.module';
*/
import { Terrain } from './Model/Terrain';



import { BodyComponent } from 'src/frontoffice/body/body.component';
import { NavbarComponent } from 'src/frontoffice/navbar/navbar.component';
import { FooterComponent } from 'src/frontoffice/footer/footer.component';

import { AddComponent } from './views/admin/terrain/add/add.component';
import { UpdateComponent } from './views/admin/terrain/update/update.component';
import { ListComponent } from './views/admin/terrain/list/list.component';
import { AddEventComponent } from './views/admin/event/add-event/add-event.component';
import { UpdateEventComponent } from './views/admin/event/update-event/update-event.component';
import { ListEventComponent } from './views/admin/event/list-event/list-event.component';

import { AddCommandComponent } from './views/admin/commande/add-command/add-command.component';
import { ListCommandComponent } from './views/admin/commande/list-command/list-command.component';
import { UpdateCommandComponent } from './views/admin/commande/update-command/update-command.component';
import { AddProduitComponent } from './views/admin/produit/add-produit/add-produit.component';
import { ListProduitComponent } from './views/admin/produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './views/admin/produit/update-produit/update-produit.component';
import { AddReclamationComponent } from './views/admin/reclamation/add-reclamation/add-reclamation.component';
import { ListReclamationComponent } from './views/admin/reclamation/list-reclamation/list-reclamation.component';
import { UpdateReclamationComponent } from './views/admin/reclamation/update-reclamation/update-reclamation.component';
import { AddReservationComponent } from './views/admin/reservation/add-reservation/add-reservation.component';
import { ListReservationComponent } from './views/admin/reservation/list-reservation/list-reservation.component';
import { UpdateReservationComponent } from './views/admin/reservation/update-reservation/update-reservation.component';







@NgModule({
  declarations: [

    AppComponent,


BodyComponent,
NavbarComponent,
FooterComponent,
AddComponent,
UpdateComponent,
ListComponent,
AddEventComponent,
UpdateEventComponent,
ListEventComponent,
AddCommandComponent,
ListCommandComponent,
UpdateCommandComponent,
AddProduitComponent,
ListProduitComponent,
UpdateProduitComponent,
AddReclamationComponent,
ListReclamationComponent,
UpdateReclamationComponent,
AddReservationComponent,
ListReservationComponent,
UpdateReservationComponent,














  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PdfViewerModule,

    ReactiveFormsModule,
    MatCardModule,

    ToastrModule ,



    ToastrModule,
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
