import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reservation } from 'src/reservation';
@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent {
  ReservationId:string;
  reservationName: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  constructor(private http: HttpClient) {}

  updateReservation(): void {
    const url = `/${this.ReservationId}`;
    const body = {
      reservationName: this.reservationName,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.status
    };

    this.http.put<Reservation>(url, body).subscribe(
      (updateReservation) => {
        console.log('Reservation updated successfully:', updateReservation);
      },
      (error) => {
        console.error('Error updating reservation:', error);
      }
    );
  }
}
