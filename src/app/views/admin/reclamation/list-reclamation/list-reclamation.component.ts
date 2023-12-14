import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Model/reclamation';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/services/application-service.service';


@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  reclamations:Reclamation[] = [];
  constructor(private service : ApplicationServiceService  ,        private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getReclamation();
  }

  private getReclamation(): void {
    this.service.getAllReclamation().subscribe(data => {
      this.reclamations = data;
    });
  }

}
