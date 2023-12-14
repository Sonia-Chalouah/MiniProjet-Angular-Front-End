import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reservation } from 'src/reservation';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent {
  reservation:Reservation={
    id: '',
    reservationName: '',
    description: '',
    startDate: undefined,
    endDate: undefined,
    status: ''
  }

  constructor(private http: HttpClient) {}

  addReservation(): void {
    this.http.post<Reservation>('/add', this.reservation).subscribe(
      (newReservation) => {
        console.log('Reservation added successfully:', newReservation);
      },
      (error) => {
        console.error('Error adding Reservation:', error);
      }
    );
  }

}
