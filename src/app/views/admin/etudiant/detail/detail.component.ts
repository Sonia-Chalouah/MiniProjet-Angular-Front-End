// detail.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { etudiantService } from './../../../../service/etudiant.service';
import { Etudiant } from './../../../../Model/Etudiant';
import { Router, ActivatedRoute } from "@angular/router";
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  etudiant: Etudiant = { 
    idEtudiant: 0,
    nomEt: '',
    prenomEt: '',
    cin: 0,
    ecole: '',
    dateNaissance: null,
    email: ''
  };

  constructor(private route: ActivatedRoute, private etudiantService: etudiantService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.etudiant.idEtudiant = params['idEtudiant'];
      this.etudiant.nomEt = params['nomEt'];
      this.etudiant.prenomEt = params['prenomEt'];
      this.etudiant.cin = params['cin'];
      this.etudiant.ecole = params['ecole'];
      this.etudiant.dateNaissance = params['dateNaissance'];
      this.etudiant.email = params['email'];
    });
  }

  ModifierFoyer() {
    this.etudiantService.ModifierFoyer(this.etudiant).subscribe(
      (res: Etudiant) => {
        localStorage.clear();
        this.router.navigate(['admin/etudiant']);
        console.log('Student Modified Successfully:', res);
      },
      (error) => {
        console.error('Error modifying student:', error);
      }
    );
  }

  printSimplePdf() {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 8]
    });

    const headers = ['Nom', 'Prénom', 'CIN', 'Ecole', 'Date', 'Email'];

    const data = [[
      this.etudiant.nomEt,
      this.etudiant.prenomEt,
      this.etudiant.cin,
      this.etudiant.ecole,
      this.etudiant.dateNaissance,
      this.etudiant.email
    ]];

    (doc as any).autoTable({
      head: [headers],
      body: data
    });

    doc.save('students.pdf');
  }
}
