import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent {
  eventId: number;
  eventName: string;
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;

  constructor(private http: HttpClient) {}

  updateEvent(): void {
    const url = `/${this.eventId}`;
    const body = {
      eventName: this.eventName,
      description: this.description,
      startDate: this.startDate,
      endDate: this.endDate,
      location: this.location
    };

    this.http.put<Evenement>(url, body).subscribe(
      (updatedEvent) => {
        console.log('Event updated successfully:', updatedEvent);
      },
      (error) => {
        console.error('Error updating event:', error);
      }
    );
  }
}