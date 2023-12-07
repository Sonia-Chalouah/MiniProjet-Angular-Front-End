import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { FoyerService } from 'src/app/service/foyer.service';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-get-foyers',
  templateUrl: './get-foyers.component.html',
  styleUrls: ['./get-foyers.component.css']
})
export class GetFoyersComponent {
  universiteData: Universite[] = [];
  receivedChambres: Foyer[] = [];
  constructor(private universiteSer: UniversiteService , 
    private router: Router,
    private route: ActivatedRoute) {
    this.loadUniversiteData();
  }

  private loadUniversiteData(): void {
    // Assuming you have a method to fetch chambres from the service
    this.universiteSer.getUniversiteList().subscribe(data => {
      this.universiteData = data;
    });
  }
 
 


  
  getFoyerDetails(UniversiteID: number): void {
    this.router.navigate(['/roua', UniversiteID]);
  }

}
