import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foyer } from 'src/app/Model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';


@Component({
  selector: 'app-details-foyer',
  templateUrl: './details-foyer.component.html',
  styleUrls: ['./details-foyer.component.css']
})
export class DetailsFoyerComponent implements OnInit {
  foyer: Foyer | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foyerService: FoyerService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getFoyerDetails(id);
    });
  }

  getFoyerDetails(id: number): void {
    this.foyerService.getFoyerById(id).subscribe(foyer => {
      this.foyer = foyer;
    });
  }
}
