import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { etudiantService } from './../../../../service/etudiant.service';
import { Etudiant } from './../../../../Model/Etudiant';
import { Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog"
import {FormsModule} from "@angular/forms";
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  implements OnInit {

  etudiant: Etudiant = { 
    idEtudiant:0,
    nomEt:'',
    prenomEt:'',
    cin:0,
    ecole:'',
    dateNaissance:null
   };

   POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes: any = [5, 10, 15, 20];


  constructor(private route: ActivatedRoute, private etudiantService: etudiantService, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.etudiant.idEtudiant = params['idEtudiant'];
      this.etudiant.nomEt = params['nomEt'];
      this.etudiant.prenomEt = params['prenomEt'];
      this.etudiant.cin = params['cin'];
      this.etudiant.ecole = params['ecole'];
      this.etudiant.dateNaissance = params['dateNaissance'];



    });
     
}






    
     
    


  ModifierFoyer() {
    console.log(this.etudiant)
    this.etudiantService.ModifierFoyer(this.etudiant).subscribe(
      (res: Etudiant) => {
        localStorage.clear();
        this.router.navigate(['admin/etudiant']);
        console.log('etudiant Modifier Avec succées:', res);
        
        // Handle success, update UI, or show a success message to the user
      },
      (error) => {
        console.error('Error modifier foyer :', error);
        // Handle error, show an error message to the user
      }
    );
    }
  
    printSimplePdf() {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [4, 8]
      });
    
      // En-tête du tableau
      const headers = ['Nom', 'Prénom', 'CIN', 'Ecole', 'Date'];
    
      // Données des étudiants
      const data = [[
        this.etudiant.nomEt,
        this.etudiant.prenomEt,
        this.etudiant.cin,
        this.etudiant.ecole,
        this.etudiant.dateNaissance
      ]];
    
      (doc as any).autoTable({
        head: [headers],
        body: data
      });
    
      doc.save('etudiants.pdf');
    }
  }


