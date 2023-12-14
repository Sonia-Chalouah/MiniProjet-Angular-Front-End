import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evenement } from 'src/app/Model/Evenement';
import { ApplicationServiceService } from 'src/app/services/application-service.service';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  events: Evenement[] = [];

  constructor(private http: HttpClient , private service:ApplicationServiceService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents(): void {
    this.service.getAllEvenement().subscribe(data => {
      this.events = data;
    });
  }
}
