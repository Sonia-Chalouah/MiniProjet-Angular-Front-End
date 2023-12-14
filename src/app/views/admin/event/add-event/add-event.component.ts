import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from 'src/app/Model/Evenement';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  evenement: Evenement = {
    id: 0,
    eventName: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    location: ''
  };

  constructor(private http: HttpClient) {}

  addEvent(): void {
    this.http.post<Evenement>('/add', this.evenement).subscribe(
      (newEvent) => {
        console.log('Event added successfully:', newEvent);
      },
      (error) => {
        console.error('Error adding event:', error);
      }
    );
  }
}