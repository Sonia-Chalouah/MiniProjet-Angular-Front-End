import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Terrain } from 'src/app/Model/Terrain';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  terrain: Terrain = {
    id: 0,
    nom: '',
    type: '',
    emplacement: '',
    capaciteSpectateurs: 0,
    eclairage: false,
    prixLocation: 0
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    this.activatedRoute.params.subscribe(params => {
      const terrainId = params['id'];
      this.getTerrain(terrainId);
    });
  }

  getTerrain(id: number): void {
    this.http.get<Terrain>(`/getTerrain/${id}`).subscribe(
      (terrain) => {
        this.terrain = terrain;
      },
      (error) => {
        console.error('Erreur lors de la récupération du terrain:', error);
      }
    );
  }

  updateTerrain(): void {
    const id = this.terrain.id;
    this.http.put<Terrain>(`/updateTerrain/${id}`, this.terrain).subscribe(
      (updatedTerrain) => {
        console.log('Terrain mis à jour avec succès:', updatedTerrain);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du terrain:', error);
      }
    );
  }
}