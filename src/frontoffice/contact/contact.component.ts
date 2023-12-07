import { Component } from '@angular/core';
import { Chambre } from 'src/app/Model/Chambre';
import { ChambreService } from 'src/app/service/chambre.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  chambresData: Chambre[] = [];
  receivedChambres: Chambre[] = [];
  constructor(private chamberserr: ChambreService ) {
    this.loadChambresData();
  }

  private loadChambresData(): void {
    // Assuming you have a method to fetch chambres from the service
    this.chamberserr.getChambreList().subscribe(data => {
      this.chambresData = data;
    });
  }
  receiveChambresData(chambres: Chambre[]): void {
    this.receivedChambres = chambres;
  }
}

