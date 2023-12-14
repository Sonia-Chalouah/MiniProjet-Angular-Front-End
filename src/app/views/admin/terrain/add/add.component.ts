import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Terrain } from 'src/app/Model/Terrain';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  terrain: Terrain = {
    id: 0,
    nom: '',
    type: '',
    emplacement: '',
    capaciteSpectateurs: 0,
    eclairage: false,
    prixLocation: 0
  };

  constructor(private http: HttpClient) {}

  addTerrain(): void {
    this.http.post<Terrain>('/addTerrain', this.terrain).subscribe(
      (newTerrain) => {
        console.log('Terrain ajouté avec succès:', newTerrain);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du terrain:', error);
      }
    );
  }
}