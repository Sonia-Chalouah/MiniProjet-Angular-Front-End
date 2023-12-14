import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Produit } from 'src/app/Model/produit';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {
  produit: Produit = {
    id: '',
    name: '',
    description: '',
    quantite: '',
    prix: 0,
    categorie: ''
  };

  constructor(private http: HttpClient) {}

  addProduit(): void {
    this.http.post<Produit>('/add', this.produit).subscribe(
      (newProduit) => {
        console.log('Produit added successfully:', newProduit);
      },
      (error) => {
        console.error('Error adding produit:', error);
      }
    );
  }
}


