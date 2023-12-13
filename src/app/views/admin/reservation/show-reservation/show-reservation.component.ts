// show-reservation.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.css']
})
export class ShowReservationComponent {
  reservationDetails: any = {}; // Replace 'any' with the type/interface for reservation details

  // You can set the reservation details in the component
  // For example, fetch data from a service and set it here

  // Optionally, handle an output event from ReservationsDetailsComponent
  handleOutputEvent(eventData: string) {
    console.log('Output Event Data:', eventData);
    // Handle the emitted event as needed
  }
}
