import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/services/application-service.service';


@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit{
  reservations: Reservation[] = [];

  constructor(private service : ApplicationServiceService  ,        private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getReservations();
  }

  private getReservations(): void {
    this.service.getAllReservation().subscribe(data => {
      this.reservations = data;
    });
  }
}
