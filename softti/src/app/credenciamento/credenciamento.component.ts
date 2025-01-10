import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-credenciamento',
  templateUrl: './credenciamento.component.html',
  styleUrls: ['./credenciamento.component.css'],
  standalone: true 
})
export class CredenciamentoComponent {
  @ViewChild('myModal') model!: ElementRef;

  openModel() {
    if (this.model) {
      this.model.nativeElement.style.display = 'block';
    }
  }

  closeModel() {
    if (this.model) {
      this.model.nativeElement.style.display = 'none';
    }
  }
}
