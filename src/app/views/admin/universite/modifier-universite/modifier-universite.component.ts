import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { FoyerService } from 'src/app/service/foyer.service';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-modifier-universite',
  templateUrl: './modifier-universite.component.html',
  styleUrls: ['./modifier-universite.component.css']
})
export class ModifierUniversiteComponent {

  idUniversiteAModifier: number;
  universite: Universite;
  initialFoyer: Foyer=null;
  selectedFoyer: Foyer=null;
  formValue: Universite = new Universite();
  formInValid:boolean;

  universiteForm: FormGroup;
  afficherAffectation: boolean = false;
  universites:Universite[];
  foyers: Foyer[];
  foyersNonAffecter: Foyer[];
  foyersAffecter: Foyer[];
  afficherAffectationMethode() {
    this.afficherAffectation = !this.afficherAffectation;
    this.foyersNonAffecter=this.foyers.filter((foyer) => !this.foyersAffecter.some((fa) => fa.idFoyer === foyer.idFoyer));
    console.log('foyersAffecter', this.foyersAffecter);
    console.log('foyersNonAffecter', this.foyersNonAffecter);
  };

  searchFoyerAffecterAj: String;
  clearSearch() {
    this.searchFoyerAffecterAj = "";
    this.selectedFoyer=null;
  }


  constructor(
    private universiteService: UniversiteService,
    private foyerService: FoyerService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getFoyers();
    this.getUniversites();
    // Créez le formulaire avec les champs nécessaires et les validateurs
    this.universiteForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      emplacement: ['', [Validators.required,Validators.minLength(3)]],
      foyer: [''],
      // Ajoutez d'autres champs avec leurs validateurs ici
    });

    // Chargez les données de l'université à modifier
    this.loadUniversityData();
    if (this.universite.foyer !== null) { this.searchFoyerAffecterAj = this.universite.foyer.nomFoyer;}
    console.log('univ1', this.universite);
    
  }

  getUniversites(){
    this.universiteService.getUniversiteList().subscribe((data : Universite[]) =>{
      
      this.universites=data;
      this.foyersAffecter=this.universites.filter((universite) => universite.foyer !== null && universite.foyer !== undefined).map((universite) => universite.foyer);
    });
   }

  private getFoyers(): void {
    this.universiteService.getFoyerList().subscribe((data: Foyer[]) => {

      this.foyers = data;
      
    });
  };

  loadUniversityData() {
    // Appelez le service pour obtenir les données de l'université à modifier
    this.route.params.subscribe(params => {this.idUniversiteAModifier = params['id']; });
    this.universiteService.getUniversiteByID(this.idUniversiteAModifier).subscribe((data: Universite) => {
      // Use an arrow function to ensure the correct 'this' context
      this.universiteService.getUniversiteByID(this.idUniversiteAModifier).subscribe((data: Universite) => {
        this.universite = data;
        this.initialFoyer=this.universite.foyer;
        this.universiteForm.patchValue({
          nom: this.universite.nomUniversite,
          emplacement: this.universite.adresse,
          foyer: this.universite.foyer !== null ? this.universite.foyer.nomFoyer : 'non affecté',
        });
      });
    });
    this.initialFoyer=this.universite.foyer;
  }


  onSubmit() {
    // Le reste du code pour la soumission du formulaire reste le même
    this.formValue.idUniversite = this.idUniversiteAModifier;
    this.formValue.nomUniversite = this.universiteForm.value.nom;
    this.formValue.adresse = this.universiteForm.value.emplacement;
    this.formValue.foyer = null;
   
     if(this.universite.nomUniversite!=this.formValue.nomUniversite||this.universite.adresse!=this.formValue.adresse){
      // Appelez le service pour la création ou la mise à jour de l'université
      
      
      this.universiteService.updateUniversite(this.formValue).subscribe(
        updatedUniversity => {
          // Gérez la réponse du serveur après la mise à jour
          console.log('Université mise à jour avec succès:', updatedUniversity);
          if(this.selectedFoyer==null){
            this.affecter(this.initialFoyer,this.formValue.nomUniversite);
          }
          
          
        },
        error => {
          // Gérez les erreurs ici
          console.error('Erreur lors de la mise à jour de l\'université:', error);
        }
      );

     }
      if(this.selectedFoyer!=null){
        if(this.universite.foyer!=null){
          
          console.log("desaf");
          this.desaffecter();
          this.affecter(this.selectedFoyer,this.formValue.nomUniversite);
          
         
        }else{
         
          this.affecter(this.selectedFoyer,this.formValue.nomUniversite);
          
       }
      }
     

      this.router.navigate(['/admin/universite']);
  }

  affecter(Foyer: Foyer,nom:String) {
    
    this.universiteService.affecterFoyerUniversite(Foyer.idFoyer, nom).subscribe(
      () => { console.log('Foyer affected successfully.'); 
    
    }
      , error => { console.error('Failed to affect foyer:', error); });
  }

  desaffecter() {
    this.universiteService.desaffecterFoyerUniversite(this.idUniversiteAModifier).subscribe(
      () => {
        console.log('Foyer desaffected successfully.');
      },
      error => {
        console.error('Failed to desaffect foyer:', error);
      }
    );

  }

  filteredFoyer(f: Foyer): boolean {

    if (this.searchFoyerAffecterAj == f.nomFoyer) {
      return true;
    } else
      if (this.searchFoyerAffecterAj == "") {
        return true;
      } else
        if (f.nomFoyer.toLowerCase().includes(this.searchFoyerAffecterAj.toLowerCase())) {
          return true;
        } else
          if (f.capaciteFoyer.toString().toLowerCase().includes(this.searchFoyerAffecterAj.toLowerCase())) {
            return true;
          }

    return false;
  };

  selcteFoyer(foyer: Foyer) {
    this.selectedFoyer = foyer;
    this.searchFoyerAffecterAj = foyer.nomFoyer;
    this.universiteForm.patchValue({
      foyer: this.searchFoyerAffecterAj,
    });
    
  };

  goToUniversite() {
    this.router.navigate(['/admin/universite']);
  };

  valid(): boolean {
    
    if((!this.universiteForm.valid)){
      this.formInValid=true;
      return true;
    }else{
      this.formInValid=false;
      return false;
    }
  }
}


