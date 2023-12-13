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

import { AddChambreComponent } from './views/admin/Chambre/add-chambre/add-chambre.component';
import { GetChambreComponent } from './views/admin/Chambre/get-chambre/get-chambre.component';
import { DetailsChambreComponent } from './views/admin/Chambre/details-chambre/details-chambre.component';
import { UpdateChambreComponent } from './views/admin/Chambre/update-chambre/update-chambre.component';
import { ChambreModule } from './views/admin/Chambre/chambre.module';


import { BodyComponent } from 'src/frontoffice/body/body.component';
import { NavbarComponent } from 'src/frontoffice/navbar/navbar.component';
import { FooterComponent } from 'src/frontoffice/footer/footer.component';

import { UserModule } from './views/front/user/user.module';
import { MyChartComponent } from './views/admin/Chambre/my-chart/my-chart.component';
import { FoyerDetailsssComponent } from './views/admin/foyer/foyer-detailsss/foyer-detailsss.component';
import { ReservationsDetailsComponent } from './views/admin/reservation/reservations-details/reservations-details.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { SoniaDetailsComponent } from './views/admin/etudiant/sonia-details/sonia-details.component';
import { OussemaDetailsComponent } from './views/admin/universite/oussema-details/oussema-details.component';
import { UniversiteDetailsComponent } from './views/admin/universite/universite-details/universite-details.component';







@NgModule({
  declarations: [

    AppComponent,
   
    
BodyComponent,
NavbarComponent,
FooterComponent,














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
    UserModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
