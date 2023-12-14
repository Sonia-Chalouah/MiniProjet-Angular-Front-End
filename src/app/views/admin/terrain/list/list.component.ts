import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Terrain } from 'src/app/Model/Terrain';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/services/application-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  terrains: Terrain[] = [];

  constructor(private service : ApplicationServiceService  ,        private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllTerrains();
  }
  private getAllTerrains(): void {
    this.service.getAllTerrains().subscribe(data => {
      this.terrains = data;
    });
  }
}
