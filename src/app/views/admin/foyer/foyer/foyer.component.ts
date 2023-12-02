
import { Component,OnInit  } from '@angular/core';
import { Foyer } from 'src/app/Model/Foyer';
import { Universite } from 'src/app/Model/Universite';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from 'src/app/service/foyer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css']
})
export class FoyerComponent implements OnInit  {
  foyers: Foyer[] = [];
  selectedFoyer: Foyer | null = null;
  foyerNameSearch: string = ''; // Variable for searching by foyer name
  universityNameSearch: string = '';
  blocSearch="";
  universities$: Observable<Universite[]> = of([]);
  p:number = 1 ;
POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes: any = [5, 10, 15, 20];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private foyerService: FoyerService
  ) {}

  ngOnInit() {
    this.findAllFoyersWithUniversiteAndBlocs();

  }

  findAllFoyersWithUniversiteAndBlocs() {
    this.foyerService.findAllFoyersWithUniversiteAndBlocs().subscribe(foyers => {
      this.foyers = foyers;
    });
  }

  deleteFoyerById(id: number): void {
    this.foyerService.deleteFoyerbyid(id).subscribe(
      () => {
        console.log('Chambre deleted successfully.');
        this.foyers = this.foyers.filter(foyer => foyer.idFoyer !== id);
      },
      error => {
        console.error('Failed to delete chambre:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }



  deleteFoyer(idFoyer: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete the foyer?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.foyerService.deleteFoyerAndDissociateUniversite(idFoyer).subscribe(
          () => {
            console.log('Foyer deleted successfully.');
            this.foyers = this.foyers.filter(foyer => foyer.idFoyer !== idFoyer);
            //this.loadFoyers(); // Call a method to reload the updated foyer list
            this.findAllFoyersWithUniversiteAndBlocs();
          },
          error => {
            console.error('Failed to delete foyer:', error);
            // Handle the error and display an appropriate error message to the user
          }
        );
      } else {
        // Cancelled deletion
      }
    });
  }


  loadFoyers() {
    this.foyerService.getAllFoyers().subscribe(data => {
      this.foyers = data;
    });
  }
  loadUniversities() {
    this.universities$ = this.foyerService.getAlluniversities();
  }

  openUpdateModal(foyer: Foyer): void {
    this.selectedFoyer = { ...foyer };  // Make a copy of the selected foyer

    // Extract the idBloc from the first element in the bloc array
    const selectedBlocId = foyer.bloc.length > 0 ? foyer.bloc[0].nomBloc : null;

    // Navigate to the update component and pass the selectedFoyer and selectedBlocId as query parameters
    this.router.navigate(['/admin/foyer/updateFoyer'], {
      queryParams: {
        id: foyer.idFoyer,
        selectedBlocId: selectedBlocId,
        selectedUniversite: foyer.universiteName
      }
    });
  }
  selectFoyer(foyer: Foyer): void {
    this.selectedFoyer = foyer;
  }
  OnSubmit(){

    console.log(this.foyers);
    this.findAllFoyersWithUniversiteAndBlocs();
    this.openUpdateModal;

  }
  detailsFoyer(id: number): void {
    this.router.navigate(['/admin/foyer/DetailsFoyer', id]);
  }
  searchFoyersByFoyerName(): void {
    this.foyerService.searchFoyersByFoyerName(this.foyerNameSearch).subscribe(
      foyers => {
        this.foyers = foyers;
        this.loadUniversities();
      },
      error => {
        console.error('Failed to search foyers by name:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }

  handleFoyerNameChange(event: Event): void {
    this.foyerNameSearch = (event.target as HTMLInputElement).value;
    this.searchFoyersByFoyerName();
  }

  searchFoyersByUniversite(): void {
    this.foyerService.searchFoyersByUniversite(this.universityNameSearch).subscribe(
      foyers => {
        this.foyers = foyers;
      },
      error => {
        console.error('Failed to search foyers by university:', error);
        // Handle the error and display an appropriate error message to the user
      }
    );
  }

    searchFoyersByBloc(): void {
      this.foyerService.searchFoyersByBloc(this.blocSearch).subscribe(
        foyers => {
          this.foyers = foyers;
        },
        error => {
          console.error('Failed to search foyers by bloc:', error);
          // Handle the error and display an appropriate error message to the user
        }
      );
    }

  handleUniversityNameChange(event: Event): void {
    this.universityNameSearch = (event.target as HTMLInputElement).value;
    if (this.universityNameSearch) {
      this.searchFoyersByUniversite();
    }
  }

  handleBlocChange(event: Event): void {
    this.blocSearch = (event.target as HTMLInputElement).value;
    if (this.blocSearch) {
      this.searchFoyersByBloc();
    }
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();

  }
  postList(): void {
    this.foyerService.findAllFoyersWithUniversiteAndBlocs().subscribe((response) => {
      this.POSTS = response;
      console.log(this.POSTS);
    });
  }

}


