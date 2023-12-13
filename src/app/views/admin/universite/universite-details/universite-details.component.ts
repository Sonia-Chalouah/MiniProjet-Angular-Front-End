// universite-details.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Universite } from 'src/app/Model/Universite';

@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent {
  @Input() universite: Universite;
  @Output() deleteUniversite = new EventEmitter<Universite>();

  onDelete() {
    this.deleteUniversite.emit(this.universite);
  }
}
