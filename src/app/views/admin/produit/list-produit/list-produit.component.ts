import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/Model/produit';
import { ApplicationServiceService } from 'src/app/services/application-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent  implements OnInit {
  produits: Produit[] = [];

  constructor(private service : ApplicationServiceService  ,        private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProduits();
  }

  private getProduits(): void {
    this.service.getAllProduits().subscribe(data => {
      this.produits = data;
    });
  }
}
