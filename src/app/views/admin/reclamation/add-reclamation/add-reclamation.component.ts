import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reclamation } from 'src/app/Model/reclamation';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent {
  reclamation: Reclamation= {
    id: 0,
    sujet: '',
    description: '',
    email: ''
  };
  constructor (private http:HttpClient) {}
  
  addReclamation(): void {
    this.http.post<Reclamation>('/addreclamation', this.reclamation).subscribe(
      (newReclamation) => {
        console.log('Reclamation added successfully:', newReclamation);
      },
      (error) => {
        console.error('Error adding event:', error);
      }
    );
  }

}
