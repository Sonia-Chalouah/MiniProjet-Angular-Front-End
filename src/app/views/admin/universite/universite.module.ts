import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite/universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterUniversiteComponent } from './ajouter-universite/ajouter-universite.component';
import { ModifierUniversiteComponent } from './modifier-universite/modifier-universite.component';



@NgModule({
  declarations: [
    UniversiteComponent,
    AjouterUniversiteComponent,
    ModifierUniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversiteModule { }
