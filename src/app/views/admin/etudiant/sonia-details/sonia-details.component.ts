import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Etudiant } from '../../../../Model/Etudiant';

@Component({
  selector: 'app-sonia-details',
  templateUrl: './sonia-details.component.html',
  styleUrls: ['./sonia-details.component.css']
})
export class SoniaDetailsComponent {
  @Input() etudiant: Etudiant;
  @Output() downloadPdf: EventEmitter<void> = new EventEmitter<void>();

  onDownloadPdf(): void {
    this.downloadPdf.emit();
  }
}
