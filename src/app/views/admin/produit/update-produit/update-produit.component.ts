import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produit } from 'src/app/Model/produit';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent {
  produitId: string;
  name: string;
  description: string;
  quantite: string;
  prix: number;
  categorie: string;

  constructor(private http: HttpClient) {}

  updateProduit(): void {
    const url = `/${this.produitId}`;
    const body = {
      name: this.name,
      prix: this.prix,
      description: this.description,
      quantite: this.quantite,
      categorie: this.categorie
    };

    this.http.put<Produit>(url, body).subscribe(
      (updatedProduit) => {
        console.log('Produit updated successfully:', updatedProduit);
      },
      (error) => {
        console.error('Error updating Produit:', error);
      }
    );
  }
}
