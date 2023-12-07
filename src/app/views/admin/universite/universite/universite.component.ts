import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { UniversiteService } from 'src/app/service/universite.service';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent {

  
  
  selectedUniversite : Universite | null = null; ///modifeier String par Universite
  selectedRechecheOption: string = 'Nom';
  search='';
  searchFoyerAffecterP: string='';  //P pour dire principale
  
  universitesExport:any[];
  universites:Universite[]=[];
  foyers:Foyer[]=[];
  foyersNonAffecter:Foyer[]=[];
  foyersAffecter:Foyer[]=[];
  selectedFoyer: Foyer;
  selectedUniversityNom: Universite;
  selectedUniversityId: number;
  selectedFoyerNomAdesafecter: String;
  listIdFoyerNonAffecter : number[]=[];
  displayMode: string = "list";


  constructor( private universiteService: UniversiteService,
    private router: Router,
    private route: ActivatedRoute) {
      this.getUniversites();
      
      this.foyersAffecter=this.universites
      .filter((universite) => universite.foyer !== null )
      .map((universite) => universite.foyer);
      this.foyersNonAffecter=this.foyers.filter((foyer) => !this.foyersAffecter.includes(foyer));
    }

    ngOnInit(): void {
      this.universiteService.updateUniversiteListAj(this.universites);
      this.getFoyers();
      
      console.log(this.foyers);
      console.log(this.foyersAffecter);
      console.log(this.foyersNonAffecter);
      
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
    }

    getUniversiteAAffecter(U: Universite) {
      this.selectedUniversityNom = U;
      this.foyersNonAffecter=this.foyers.filter((foyer) => !this.foyersAffecter.some((fa) => fa.idFoyer === foyer.idFoyer));
      console.log('foyersAffecter', this.foyersAffecter);
    console.log('foyersNonAffecter', this.foyersNonAffecter);
    }
    affecterFoyerAuniversite(Foyer:Foyer){
      this.universiteService.affecterFoyerUniversite(Foyer.idFoyer,this.selectedUniversityNom.nomUniversite).subscribe(
        () => {
        console.log('Foyer affected successfully.');
        this.foyersAffecter.push(Foyer);
        this.foyersNonAffecter=this.foyersNonAffecter.filter((foyer) => foyer.idFoyer !== Foyer.idFoyer);
        this.selectedUniversityNom.foyer=Foyer;
      },
      error => {
        console.error('Failed to affect foyer:', error);
      }

    );
    
    }

    getFoyerNomAdesafecter(idUniversite:number):String {
      
      return this.universites.find(u => u.idUniversite === idUniversite).foyer?.nomFoyer;
    }
    getUniversiteADesaffecter(id: number,foyer:Foyer) {
      this.selectedUniversityId = id;
      this.selectedFoyerNomAdesafecter=this.getFoyerNomAdesafecter(id);
      this.selectedFoyer=foyer;
    }

    desaffecterFoyerAuniversite(){
      this.universiteService.desaffecterFoyerUniversite(this.selectedUniversityId).subscribe(
        () => {
        console.log('Foyer desaffected successfully.');
        this.universites.find(u => u.idUniversite === this.selectedUniversityId).foyer=null;
        this.foyersNonAffecter.push(this.selectedFoyer);
        this.foyersAffecter=this.foyersAffecter.filter((foyer) => foyer.idFoyer !== this.selectedFoyer.idFoyer);
      },
      error => {
        console.error('Failed to desaffect foyer:', error);
      }

    );
   
    }

     GoToaddUniversite(){
      this.router.navigate(['/Ajouter']);
     }
     GoToupdateUniversite(){
      this.router.navigate(['/updateUniversite']);
     }

     getUniversiteAdelete(U: Universite) {
      this.selectedUniversityNom = U;
      
    }

    desaffecter(u:Universite) {
      this.universiteService.desaffecterFoyerUniversite(u.idUniversite).subscribe(
        () => {
          console.log('Foyer desaffected successfully.');
        },
        error => {
          console.error('Failed to desaffect foyer:', error);
        }
      );
  
    }
     deleteUniversite():void{
      if(this.selectedUniversityNom.foyer!=null){
        this.desaffecter(this.selectedUniversityNom);
        this.foyersNonAffecter.push(this.selectedUniversityNom.foyer);
        this.foyersAffecter=this.foyersAffecter.filter((foyer) => foyer.idFoyer !== this.selectedUniversityNom.foyer.idFoyer);
        this.universiteService.deleteUniversite(this.selectedUniversityNom).subscribe(
          () => {
            console.log('Universite deleted successfully.')
            this.universites=this.universites.filter(c => c.idUniversite!==this.selectedUniversityNom.idUniversite);
          },
          error => {
            console.error('Failed to delete universite:', error);
          }
        );
      }else{
        this.universiteService.deleteUniversite(this.selectedUniversityNom).subscribe(
          () => {
            console.log('Universite deleted successfully.')
            this.universites=this.universites.filter(c => c.idUniversite!==this.selectedUniversityNom.idUniversite);
          },
          error => {
            console.error('Failed to delete universite:', error);
          }
        );
      }
      
     }
  resetSearch(){
    this.search='';
  }

  filteredUniversites(u :Universite):boolean{
    
    if(this.search=='')
    {
      return true;
    }else
    if(u.nomUniversite.toLowerCase().includes(this.search.toLowerCase()))
    {
      return true;
    }else 
    if(u.foyer!=null)
    {
      if(u.foyer.nomFoyer.toLowerCase().includes(this.search.toLowerCase()))
    {
      return true;
    }
    }else
    if(u.adresse.toLowerCase().includes(this.search.toLowerCase()))
    {
      return true;
    }
    
    return false;
  }

  filteredFoyer(f :Foyer):boolean{
    
    
    if(this.searchFoyerAffecterP=='')
    {
      return true;
    }else
    if(f.nomFoyer.toLowerCase().includes(this.searchFoyerAffecterP.toLowerCase()))
    {
      return true;
    }else
    if(f.capaciteFoyer.toString().toLowerCase().includes(this.searchFoyerAffecterP.toLowerCase()))
    {
      return true;
    }
    return false;
  }
goToUpdate(id :number):void
{
  this.router.navigate(['/admin/universite/Modifier' , id]);
  this.universiteService.getUniversiteAModifier(this.universites);
}
  

Export(){
  this.universitesExport = this.universites.map((universite) => {
    const { foyer, ...rest } = universite; // Destructuring pour extraire la propriété foyer
  
    const nomFoyer = foyer ? foyer.nomFoyer : ''; // Récupération du nom du foyer ou une chaîne vide s'il n'y a pas de foyer
  
    return { ...rest, nomFoyer }; // Retourne un nouvel objet avec le nom du foyer
  });
  console.log(this.universitesExport);
}

generatePDF() {
  const doc = new jsPDF.default({
    orientation: 'landscape',
    unit: 'in',
    format: [4, 8]
  });

  // Ajouter le titre
  doc.text('Liste des universités', 0.5, 0.5);

  // En-tête du tableau
  const headers = ['Nom', 'Adresse', 'Foyer'];

  // Filtrer les universités avec une valeur de foyer non nulle
  const filteredData = this.universites.filter(u => u.foyer !== null);

  // Données des universités
  const data = filteredData.map(u => [
    u.nomUniversite,
    u.adresse,
    u.foyer.nomFoyer
  ]);

  (doc as any).autoTable({
    head: [headers],
    body: data
  });

  doc.save('universitesPDF.pdf');
}

}
