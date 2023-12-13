// oussema-details.component.ts

import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/Model/Universite';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-oussema-details',
  templateUrl: './oussema-details.component.html',
  styleUrls: ['./oussema-details.component.css']
})
export class OussemaDetailsComponent implements OnInit {
  universites: Universite[] = [];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.getUniversites();
  }

  getUniversites() {
    this.universiteService.getUniversiteList().subscribe(
      (data: Universite[]) => {
        this.universites = data;
      },
      error => {
        console.error('Failed to fetch universites:', error);
      }
    );
  }
  onDeleteUniversite(universite: Universite) {
    this.universiteService.deleteUniversite(universite).subscribe(
      () => {
        console.log(`Universite with id ${universite.idUniversite} deleted successfully.`);
        this.universites = this.universites.filter(u => u.idUniversite !== universite.idUniversite);
      },
      error => {
        console.error(`Failed to delete universite with id ${universite.idUniversite}:`, error);
      }
    );
  }
}
