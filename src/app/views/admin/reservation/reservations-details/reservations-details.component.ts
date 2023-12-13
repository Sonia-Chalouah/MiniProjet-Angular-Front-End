// reservations-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservations-details',
  templateUrl: './reservations-details.component.html',
  styleUrls: ['./reservations-details.component.css']
})
export class ReservationsDetailsComponent {
  @Input() reservationDetails: any; 
  @Output() someOutputEvent = new EventEmitter<string>();

}
