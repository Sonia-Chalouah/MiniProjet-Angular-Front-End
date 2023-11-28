import { Component, OnInit } from '@angular/core';
import { Etudiant } from './../../../../Model/Etudiant';
import { etudiantService } from './../../../../service/etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {
  
  etudiant: Etudiant = { 
    idEtudiant:0,
    nomEt:'',
    prenomEt:'',
    cin:0,
    ecole:'',
    dateNaissance:null


  }



  constructor(private route: ActivatedRoute, private etudiantService: etudiantService, private router: Router) {}

  ngOnInit(): void {
  }

  saveEtudiant() {
    this.etudiantService.createEmployee(this.etudiant).subscribe(data => {
      this.router.navigate(['admin/etudiant']);

      console.log(data);

    });
  }

  getAllEtudiants() {
    // Implémentez la logique pour récupérer tous les étudiants
    // Utilisez le service etudiantService pour appeler une méthode qui récupère tous les étudiants
  }

  onSubmit() {
    console.log(this.etudiant);
    this.saveEtudiant();
  }
}
