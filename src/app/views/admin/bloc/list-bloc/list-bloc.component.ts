import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { Chambre } from 'src/app/Model/Chambre';
import { Foyer } from 'src/app/Model/Foyer';
import { BlocService } from 'src/app/service/bloc.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit{
  blocs: Bloc[] = [];
  chambres: Chambre [] = [];
  foyers: Foyer []= [];
  searchBlocName: string | undefined ;
  selectedBloc : Bloc | undefined ;

   constructor(private BlocService: BlocService
    , private router: Router,
    private route: ActivatedRoute) {}
   
  
 // universities: University[] = [];



  ngOnInit() {
    this.loadBlocs(); }

    loadBlocs() {
      this.BlocService.getAllblocs().subscribe(
        blocs => {
          console.log('Blocs:', blocs);
          this.blocs = blocs;
        },
        error => {
          console.error('Erreur lors de la récupération des blocs:', error);
        }
      );
    }

      deleteBloc(bloc: Bloc): void {
    this.BlocService.deleteBloc(bloc).subscribe(
      () => {
        console.log('Bloc deleted successfully.');
        this.blocs = this.blocs.filter(b => b.idBloc !== bloc.idBloc);
      },
      error => {
        console.error('Failed to delete bloc:', error);
      }
    );
  }

  getChambres(idBloc: number): void {
    const bloc = this.blocs.find(c => c.idBloc === idBloc);
    if (bloc) {
      this.selectedBloc = bloc;
      this.BlocService.getChambresByBloc(idBloc).subscribe(chambres => {
        bloc.chambres = chambres;
      });
    }
  }

  updateBloc(idBloc: number): void {

    this.router.navigate(['admin/bloc/UpdateBloc']);
  }

  searchBlocs(): void {
    this.BlocService
      .searchBlocs(this.searchBlocName)
      .subscribe(blocs => (this.blocs = blocs));
  }

  resetSearch(): void {
    this.searchBlocName = undefined;
    this.loadBlocs();
  } 
  GoToaddBloc(){
    this.router.navigate(['/admin/bloc/addBloc']);


  }
 
}