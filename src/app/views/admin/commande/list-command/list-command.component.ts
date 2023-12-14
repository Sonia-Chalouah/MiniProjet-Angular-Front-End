import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from 'src/app/Model/commande';
import { ApplicationServiceService } from 'src/app/services/application-service.service';

@Component({
  selector: 'app-list-command',
  templateUrl: './list-command.component.html',
  styleUrls: ['./list-command.component.css']
})
export class ListCommandComponent implements OnInit {
  commandes: Commande[] = [];

  constructor(private service : ApplicationServiceService  ,        private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCommande();
  }





  private getCommande(): void {
    this.service.getAllCommandes().subscribe(data => {
      this.commandes = data;
    });
  }



}
