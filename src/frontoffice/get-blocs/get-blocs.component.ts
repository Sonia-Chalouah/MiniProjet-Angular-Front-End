import { Component } from '@angular/core';
import { Bloc } from 'src/app/Model/Bloc';
import { BlocService } from 'src/app/service/bloc.service';

@Component({
  selector: 'app-get-blocs',
  templateUrl: './get-blocs.component.html',
  styleUrls: ['./get-blocs.component.css']
})
export class GetBlocsComponent {
  blocsData: Bloc[] = [];
  receivedChambres: Bloc[] = [];
  constructor(private blocService: BlocService ) {
    this.loadChambresData();
  }

  private loadChambresData(): void {
    // Assuming you have a method to fetch chambres from the service
    this.blocService.getAllblocs().subscribe(data => {
      this.blocsData = data;
    });
  }
  receiveChambresData(blocs: Bloc[]): void {
    this.receivedChambres = blocs;
  }
}



