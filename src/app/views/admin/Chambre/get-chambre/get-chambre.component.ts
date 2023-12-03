import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from 'src/app/Model/chambre';
import { Reservation } from 'src/app/Model/Reservation';
import { ChambreService } from 'src/app/service/chambre.service';
import {  LinearScale, CategoryScale } from 'chart.js';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import autotable





declare var Chart: any;


@Component({
  selector: 'app-get-chambre',
  templateUrl: './get-chambre.component.html',
  styleUrls: ['./get-chambre.component.css']
})
export class GetChambreComponent implements OnInit {
  chambres!: Chambre[];
  reservations!: Reservation[];
  selectedChambre: Chambre;
  searchNumeroChambre: number;
  searchTypeC: string;



  constructor(
    private chambreService: ChambreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getChambres();
    


    

  }
  generatePDF(): void {
    const doc = new jsPDF();

    // Add content to the PDF
    doc.text('Chambre List', 10, 10);

    // Add table headers
    const headers = ['ID', 'Room Number', 'Type', 'Bloc'];
    const data = this.chambres.map(chambre => [
      chambre.idChambre.toString(),
      chambre.numeroChambre.toString(),
      chambre.typeC.toString(),  // Assuming typeC is a string or has a meaningful toString method
      chambre.bloc?.nomBloc .toString()    // Assuming bloc is a string or has a meaningful toString method
    ]);

    (doc as any).autoTable({

      head: [headers],
      body: data  
    });

    // Save the PDF
    doc.save('chambre_list.pdf');
  }

  private getChambres(): void {
    this.chambreService.getChambreList().subscribe(data => {
      this.chambres = data;
    });
  }

  deleteChambre(chambre: Chambre): void {
    this.chambreService.deleteChambre(chambre).subscribe(
      () => {
        console.log('Chambre deleted successfully.');
        this.chambres = this.chambres.filter(c => c.idChambre !== chambre.idChambre);
      },
      error => {
        console.error('Failed to delete chambre:', error);
      }
    );
  }

  getReservations(chambreId: number): void {
    const chambre = this.chambres.find(c => c.idChambre === chambreId);
    if (chambre) {
      this.selectedChambre = chambre;
      this.chambreService.getReservationsByChambre(chambreId).subscribe(reservations => {
        chambre.reservations = reservations;
      });
    }
  }

  updateChambre(chambreId: number): void {
    // Navigate to the update component with the selected Chambre ID
    this.router.navigate(['/admin/chambre/updateChambre', chambreId]);
  }

  searchChambres(): void {
    this.chambreService
      .searchChambres(this.searchNumeroChambre, this.searchTypeC)
      .subscribe(chambres => (this.chambres = chambres));
  }
  resetSearch(): void {
    this.searchNumeroChambre = undefined;
    this.searchTypeC = undefined;
    this.getChambres();
  }

  GoToStatistique(){
    this.router.navigate(['/admin/chambre/detail']);


  }

  GoToaddChambre(){
    this.router.navigate(['/addChambre']);


  }

  



  
}


