import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { FoyerService } from 'src/app/service/foyer.service';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-roua-front',
  templateUrl: './roua-front.component.html',
  styleUrls: ['./roua-front.component.css']
})
export class RouaFrontComponent {
  foyer: Foyer;
  blocs: Bloc ; // Initialize as an array

  universite: Universite = new Universite();

  constructor(
    private universiteService: UniversiteService,
    private route: ActivatedRoute,
    private foyerService: FoyerService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
  
      if (id) {
        this.loadUniversiteData(id);
        //this.getBlocsByFoyer(id);
      }
    });
  }
  
  
  loadUniversiteData(id: number): void {
    this.universiteService.getUniversiteByID(id).subscribe(universite => {
      this.universite = universite;
      this.foyer = universite?.foyer;
      console.log('universite:', this.universite);
      console.log('foyer:', this.foyer);
    });
  }
  
  getBlocsByFoyer(id: number): void {
    this.foyerService.getFoyerById(id).subscribe(foyer => {
      this.foyer = foyer;
      console.log('blocs:', this.foyer);
    });
  }

  
}
