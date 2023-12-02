import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

import Chart from 'chart.js/auto';
import { FoyerService } from 'src/app/service/foyer.service';
interface StatisticsItem {
  label: string;
  numberOfBlocs: number;
  capacity: number;
}
@Component({
  selector: 'app-statistique-foyer',
  templateUrl: './statistique-foyer.component.html',
  styleUrls: ['./statistique-foyer.component.css']
})

export class StatistiqueFoyerComponent {
  statistics: StatisticsItem[] = [];

  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  constructor(private foyerService: FoyerService) { }

  ngAfterViewInit() {
    this.fetchFoyerStatistics();
  }

  fetchFoyerStatistics() {
    this.foyerService.getFoyerStatistics().subscribe(
      (response: any) => { // Use "any" type for response if you're unsure of the exact structure
        this.statistics = Object.keys(response).map((key: string) => ({
          label: key,
          numberOfBlocs: response[key][0], // Update property name to numberOfBlocs
          capacity: response[key][1] // Update property name to capacity
        }));
        console.log('Statistics:', this.statistics);
        this.createChart();
      },
      (error) => {
        console.error('Failed to fetch foyer statistics:', error);
      }
    );
  }

  createChart() {
    const labels = this.statistics.map((statistic: StatisticsItem) => statistic.label);
    const numberOfBlocsData = this.statistics.map((statistic: StatisticsItem) => statistic.numberOfBlocs);
    const capacityData = this.statistics.map((statistic: StatisticsItem) => statistic.capacity);

    const canvas: HTMLCanvasElement = this.chartCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      console.error('Failed to get 2D context for canvas');
      return;
    }

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Number of Blocs',
            data: numberOfBlocsData,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          },
          {
            label: 'Capacity',
            data: capacityData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
