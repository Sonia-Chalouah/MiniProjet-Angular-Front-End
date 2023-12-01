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






@NgModule({
  declarations: [
    
    AppComponent,
   
  

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
