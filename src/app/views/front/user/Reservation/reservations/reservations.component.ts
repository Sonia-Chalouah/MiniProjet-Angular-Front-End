import { Component } from '@angular/core';
import { Reservation } from 'src/app/Model/Reservation';
import { ReservationService } from 'src/app/service/reservation/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  reservations: Reservation[] = [];
  constructor( private serviceReservation:ReservationService) { }

  message: string = '';
  ngOnInit(): void {
    console.log("Get List of Reservation ");    
    this.getMesReservations();
  }

  getMesReservations() {
    const cinUser = localStorage.getItem('cinEtudiant');
  
    if (!cinUser) {
      this.message = 'Numéro de cin non trouvé ';
      console.error('Numéro de cin non trouvé dans le localStorage.');
      return;
    }
  
    this.serviceReservation.getMesReservations(+cinUser).subscribe(
      (data: any) => {
        this.reservations = data['reservations'];
         this.message = data['message']; 
        console.log("Object reservation ", this.reservations);
      },
      (error) => {
        console.error('Erreur lors de la récupération des réservations :', error);
      }
    );
  }
}
