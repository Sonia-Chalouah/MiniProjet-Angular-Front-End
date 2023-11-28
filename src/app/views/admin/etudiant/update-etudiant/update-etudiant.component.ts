import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { etudiantService } from './../../../../service/etudiant.service';
import { Etudiant } from './../../../../Model/Etudiant';
import { Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog"
import {FormsModule} from "@angular/forms";
;

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  
  etudiant: Etudiant = { 
    idEtudiant:0,
    nomEt:'',
    prenomEt:'',
    cin:0,
    ecole:'',
    dateNaissance:null
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
    }}
