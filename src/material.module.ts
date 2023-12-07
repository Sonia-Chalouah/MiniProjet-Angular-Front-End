import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatCheckboxModule} from "@angular/material/checkbox"
import { ToastrModule } from 'ngx-toastr';
import { BodyComponent } from './frontoffice/body/body.component';
import { FooterComponent } from './frontoffice/footer/footer.component';
import { NavbarComponent } from './frontoffice/navbar/navbar.component';
import { AboutUsComponent } from './frontoffice/about-us/about-us.component';
import { ContactComponent } from './frontoffice/contact/contact.component';
import { GetFoyersComponent } from './frontoffice/oussema/get-foyers.component';
import { RouaFrontComponent } from './frontoffice/roua-front/roua-front.component';
import { FoyersComponent } from './frontoffice/foyers/foyers.component';

@NgModule({
    exports: [
        MatInputModule,
        MatCardModule,
        MatRadioModule,
        MatButtonModule,
        MatTableModule,MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSelectModule,
        MatCheckboxModule,
        ToastrModule
    ],
    declarations: [





  

  
    
  
    RouaFrontComponent,
                                  FoyersComponent
                                
  ]
})
export class MaterialModule { }
