import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { Chambre } from 'src/app/Model/Chambre';
import { Foyer } from 'src/app/Model/Foyer';
import { BlocService } from 'src/app/service/bloc.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit{
  @Input() blocInput: Bloc[] = [];
  @Output()  blocOutput: EventEmitter<Bloc[]> = new EventEmitter<Bloc[]>();
  blocNameSearch: string = '';
  idFoyerSearch!: number ;
  numeroChambreSearch: number =0;
  blocs: Bloc[] = [];
  chambres: Chambre [] = [];
  foyers: Foyer []= [];
  searchBlocName: string | undefined ;
  selectedBloc : Bloc | undefined ;
  sortOption: string | undefined;
  POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 3;
tableSizes: any = [3, 9, 12, 15];
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
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to delete the foyer?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result)=> {
        if (result.isConfirmed) {
          this.BlocService.deleteBloc(bloc).subscribe(
            () => {
              console.log('Bloc deleted successfully.');
              this.blocs = this.blocs.filter(b => b.idBloc !== bloc.idBloc);
            
      },
    error => {
      console.error('Failed to delete bloc:', error);
    }
    );
  } else {
    // Cancelled deletion
  }
});
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

 


  GoToaddBloc(){
    this.router.navigate(['/admin/bloc/addBloc']);


  }
  loadFoyers() {
    this.BlocService.getAllFoyers().subscribe(data => {
      this.foyers = data;
    });
  }
  
  searchBlocsByBlocName(): void {
    this.BlocService.searchBlocsByName(this.blocNameSearch).subscribe(
      blocs => {
        this.blocs = blocs; // Correct assignment
      },
      error => {
        console.error('Failed to search blocs by name:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }



  searchBlocsByfoyer(): void {
    this.BlocService.searchBlocsByFoyer(this.idFoyerSearch).subscribe(
      blocs => {
        this.blocs = blocs; // Correct assignment
      },
      error => {
        console.error('Failed to search blocs by foyer:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }
  searchBlocsByChambre(): void {
    this.BlocService.searchBlocsByChambres(this.numeroChambreSearch).
    subscribe(
      blocs => {
        this.blocs = blocs; // Correct assignment
      },
      error => {
        console.error('Failed to search blocs by foyer:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }
  getChambresByBlocId(idBloc: number): void {
    this.BlocService.getChambresByBlocId(idBloc).subscribe(
      (chambres: Chambre[]) => {
        this.chambres = chambres;
      },
      (error) => {
        // Handle error
      }
    );
  }
  detailBloc() {
    this.router.navigate([`/admin/bloc/details-bloc`]);
  }
 
  updateBloc(id: number): void {
    // Navigate to the update component with the selected Chambre ID
    this.router.navigate(['/admin/bloc/UpdateBloc', id]);
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }
  postList(): void {
    this.BlocService.getAllblocs().subscribe((response) => {
      this.POSTS = response;
      console.log(this.POSTS);
    });
  }

sortBlocsByName(): void {
  this.blocs.sort((a, b) => {
    const nameA = a.nomBloc.toLowerCase();
    const nameB = b.nomBloc.toLowerCase();

    if (nameA < nameB) {
      return -1; // nameA comes before nameB
    } else if (nameA > nameB) {
      return 1; // nameA comes after nameB
    } else {
      return 0; // names are equal
    }
  });
}

}