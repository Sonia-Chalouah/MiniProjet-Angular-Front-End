import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { FoyerService } from 'src/app/service/foyer.service';
import { UniversiteService } from 'src/app/service/universite.service';

@Component({
  selector: 'app-ajouter-universite',
  templateUrl: './ajouter-universite.component.html',
  styleUrls: ['./ajouter-universite.component.css']
})
export class AjouterUniversiteComponent implements OnInit {

  AjoutForm:FormGroup;
  universite: Universite = new Universite();

  foyers: Foyer[]=[];
  universites:Universite[];
  afficherAffectation: boolean =false;
  selectedFoyer: Foyer;
  foyer$: Observable<Foyer[]> = of([]);
  foyersNonAffecter: Foyer[];
  foyersAffecter: Foyer[];
  searchFoyerAffecterAj:String; // Aj pour dire search Foyer a Affecter dans l'Ajout
  
  
  constructor(
    private universiteService: UniversiteService,
    private foyerService: FoyerService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.AjoutForm=this.fb.group({
      nomUniversite : ['',[Validators.required, Validators.minLength(5)]],
      adresseUniversite : ['',[Validators.required, Validators.minLength(5)]]
    })
    this.searchFoyerAffecterAj = "";
  }
//
  ngOnInit(): void {
    this.getFoyers();
    this.getUniversites();
    this.selectedFoyer = null;
    console.log(this.foyers);
   
  };

  getUniversites(){
    this.universiteService.getUniversiteList().subscribe((data : Universite[]) =>{
      
      this.universites=data;
      this.foyersAffecter=this.universites.filter((universite) => universite.foyer !== null && universite.foyer !== undefined).map((universite) => universite.foyer);
    });
   }

  loadFoyer() {
    this.foyer$ = this.universiteService.getFoyerList();
  };

  private getFoyers(): void {
    this.universiteService.getFoyerList().subscribe((data: Foyer[]) => {
    
      this.foyers = data;
    });
  };

  clearSearch(){
    this.searchFoyerAffecterAj = "";
  }

  selcteFoyer(foyer:Foyer){
    this.selectedFoyer=foyer;
    this.searchFoyerAffecterAj=foyer.nomFoyer;
  };
  
  SaveUniversite() {
    this.universiteService.createUniversite(this.universite).subscribe(
      () => {
        console.log('universite created successfully.');
        //affecterFoyerAuniversite(this.selectedFoyer);
        if(this.selectedFoyer!=null){
          this.universiteService.affecterFoyerUniversite(this.selectedFoyer.idFoyer,this.universite.nomUniversite).subscribe(
            () => {
            console.log('Foyer affected successfully.');
            
            this.router.navigate(['/admin/universite']);
            this.universite.foyer=this.selectedFoyer;
            this.universiteService.setUniversiteAj(this.universite);
          },
          error => {
            console.error('Failed to affect foyer:', error);
          }
      
        );
        }
        else{
          this.router.navigate(['/admin/universite']);
        }
        //
        
      },
      error => {
        console.error('Failed to create universite:', error);
      }
    );
  };

  

  

  goToUniversite() {
    this.router.navigate(['/admin/universite']);
  };

  OnSubmit() {
    if (this.afficherAffectation) {
      this.universite.foyer = this.selectedFoyer;
    } else {
      this.universite.foyer = null;
    }

    console.log(this.universite);
    this.SaveUniversite();
  };

  afficherAffectationMethode(){
    this.afficherAffectation=!this.afficherAffectation;
    this.foyersNonAffecter=this.foyers.filter((foyer) => !this.foyersAffecter.some((fa) => fa.idFoyer === foyer.idFoyer));
  };
  filteredFoyer(f :Foyer):boolean{
    
    if(this.searchFoyerAffecterAj=="")
    {
      return true;
    }else
    if(f.nomFoyer.toLowerCase().includes(this.searchFoyerAffecterAj.toLowerCase()))
    {
      return true;
    }else
    if(f.capaciteFoyer.toString().toLowerCase().includes(this.searchFoyerAffecterAj.toLowerCase()))
    {
      return true;
    }
    
    return false;
  };

   f():boolean {
    return (this.AjoutForm.get('nomUniversite').invalid && (this.AjoutForm.get('nomUniversite').dirty || this.AjoutForm.get('nomUniversite').touched))||
    (this.AjoutForm.get('adresseUniversite').invalid && (this.AjoutForm.get('adresseUniversite').dirty || this.AjoutForm.get('adresseUniversite').touched));
  }
  
}