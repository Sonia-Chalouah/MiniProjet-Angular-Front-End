import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MaterialModule } from 'src/material.module';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';

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
    ToastrModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
