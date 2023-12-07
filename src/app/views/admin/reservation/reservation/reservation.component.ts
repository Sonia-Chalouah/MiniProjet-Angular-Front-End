import { Component, ElementRef, ViewChild } from '@angular/core';
import { Reservation } from '../../../../Model/Reservation';
import { ReservationService } from 'src/app/service/reservation/reservation.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {


  reservations: Reservation[] = [];
  @ViewChild('pdfContent') pdfContent!: ElementRef;


  constructor( private serviceReservation:ReservationService) { }
  message: string;


  ngOnInit(): void {
    console.log("Get List of Reservation ");
    this.getAllReservations();
  }


  getAllReservations(){
      this.serviceReservation.getAllReservations().subscribe((data : Reservation[])=>{
      this.reservations = data;
      console.log("Object reservation ",this.reservations);
    })
  }






  delete(id){
    this.serviceReservation.delete(id).subscribe(() => {
      window.location.reload();
    });
  }
  
  nonValide(id){
  if (confirm("Voulez vous vraiment non valider  ce reservation ?")) {
    this.serviceReservation.nonValide(id).subscribe(() => {
      alert('Modifier effectuée avec succés');
      window.location.reload();
      });
  }}


  ouiValide(id){
    if (confirm("Voulez vous vraiment  valider  ce reservation ?")) {
      this.serviceReservation.ouiValide(id).subscribe(() => {
        alert('Modifier effectuée avec succés');
        window.location.reload();
        });
  }}




  estValide(id):void{
      this.serviceReservation.estValide(id).subscribe((data: Map<string, Object>) => {
        console.log('Réponse de l\'API :', data);
        this.message= data['message'];


      });
  }


  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.reservations);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reservations');
    XLSX.writeFile(wb, 'reservations.xlsx');
  }


  generatePDF(): void {
    const title = 'Liste des Réservations';
    const content = this.pdfContent.nativeElement;


    html2canvas(content).then(canvas => {
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.text(title, 10, 10);
      pdf.addImage(imageData, 'PNG', 10, 20, 180, 0);
     // Add horizontal line
     pdf.setLineWidth(0.5);
     pdf.line(10, pdf.internal.pageSize.height - 20, 200, pdf.internal.pageSize.height - 20);


     // Add contact information
     const contactText = ' BY Campus Living Spaces ';
     pdf.setFontSize(15);
     pdf.text(contactText, 10, pdf.internal.pageSize.height - 15);






      pdf.save('reservations.pdf');


    });
  }




}



