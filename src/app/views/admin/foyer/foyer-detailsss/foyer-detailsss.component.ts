// foyer-detailsss.component.ts

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Bloc } from 'src/app/Model/Bloc';
import { Foyer } from 'src/app/Model/Foyer';

@Component({
  selector: 'app-foyer-detailsss',
  templateUrl: './foyer-detailsss.component.html',
  styleUrls: ['./foyer-detailsss.component.css']
})
export class FoyerDetailsssComponent implements OnInit {
  @Input() foyer: Foyer | null = null;
  @Input() blocs: Bloc[] = [];
  @Output() blocsLoaded: EventEmitter<Bloc[]> = new EventEmitter<Bloc[]>();

  constructor() {}

  ngOnInit() {
  }

  handleBlocsLoaded(blocs: Bloc[]) {
    this.blocsLoaded.emit(blocs);
  }
}
