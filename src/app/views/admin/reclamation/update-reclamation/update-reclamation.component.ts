import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Reclamation } from 'src/app/Model/reclamation';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.css']
})
export class UpdateReclamationComponent {
reclamationId:number;
sujet:string;
description:string;
email:string;

constructor(private http: HttpClient) {}

updateReclamation(): void {
  const url = `/${this.reclamationId}`;
  const body = {
    sujet: this.sujet,
    description: this.description,
    email: this.email,
 
  };

  this.http.put<Reclamation>(url, body).subscribe(
    (updateReclamation) => {
      console.log('Reclamation updated successfully:', updateReclamation);
    },
    (error) => {
      console.error('Error updating Reclamation:', error);
    }
  );
}
}
