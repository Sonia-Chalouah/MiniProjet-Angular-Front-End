import { Router } from '@angular/router';
import { Commande } from './../../../../Model/commande';
import { ApplicationServiceService } from './../../../../services/application-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {
  commande: Commande = new Commande();



  constructor(private service : ApplicationServiceService ,
               private router :Router ) {}
  ngOnInit(): void {

  }
  initializeChambre(): void {
    this.commande = new Commande(); // Initialize the entire chambre object

    // Initialize chambre.bloc with a new Bloc object

  }

  saveCommande() {
    this.service.createCommande(this.commande).subscribe(
      (response) => {
        console.log( response);
      },

    );
  }
  goToCommandeList(): void {
    this.router.navigate(['/admin/chambre']);
  }

  onSubmit(): void {
    console.log(this.commande);
    this.saveCommande();
   this.goToCommandeList()
  }









}
