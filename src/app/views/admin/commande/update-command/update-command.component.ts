import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Commande } from 'src/app/Model/commande';

@Component({
  selector: 'app-update-command',
  templateUrl: './update-command.component.html',
  styleUrls: ['./update-command.component.css']
})
export class UpdateCommandComponent {

  commandeId: string;
  nomClient: string;
  telephone: string;
  adresse: string;
  dateCommande: Date;
  dateLivraison: Date;
  prixTotal: number;

  constructor(private http: HttpClient) {}

  updateCommande(): void {
    const url = `/${this.commandeId}`;
    const body = {
      nomClient: this.nomClient,
      telephone: this.telephone,
      adresse: this.adresse,
      dateCommande: this.dateCommande,
      dateLivraison: this.dateLivraison,
      prixTotal: this.prixTotal,
    };

    this.http.put<Commande>(url, body).subscribe(
      (updateCommande) => {
        console.log('Commande updated successfully:', updateCommande);
      },
      (error) => {
        console.error('Error updating Commande:', error);
      }
    );
  }
}
