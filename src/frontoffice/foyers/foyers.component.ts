import { Component } from '@angular/core';
import { Foyer } from 'src/app/Model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-foyers',
  templateUrl: './foyers.component.html',
  styleUrls: ['./foyers.component.css']
})
export class FoyersComponent {
  foyerData: Foyer[] = [];
  receivedfoyer: Foyer[] = [];
  constructor(private foyerService: FoyerService ) {
    this.loadFoyerData();
  }

  private loadFoyerData(): void {
    // Assuming you have a method to fetch chambres from the service
    this.foyerService.getAllFoyers().subscribe(data => {
      this.foyerData = data;
    });
  }
  receiveChambresData(foyer: Foyer[]): void {
    this.receivedfoyer = foyer;
  }

}
