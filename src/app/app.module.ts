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
import { ContactComponent } from 'src/frontoffice/contact/contact.component';







@NgModule({
  declarations: [

    AppComponent,
   
    
BodyComponent,
NavbarComponent,
FooterComponent,
ContactComponent





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
    
   

    ToastrModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
