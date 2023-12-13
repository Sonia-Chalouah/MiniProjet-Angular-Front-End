// my-chart.component.ts

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ChambreTypeStatistics } from 'src/app/Model/chambre-type-statistics';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  @Input() chambreTypeStatistics: ChambreTypeStatistics[] = [];
  @Input() mostCommonTypeImage: string = '';
  welcomeMessage: string = ''; 

  @Output() mostCommonTypeSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    // Initialization logic here if needed
  }

  // Your existing code...

  onMostCommonTypeSelected(type: string): void {
    this.mostCommonTypeSelected.emit(type);
  }
  onMouseEnter(): void {
    // Set the welcome message
    this.welcomeMessage = 'Welcome back!';
  }

}
