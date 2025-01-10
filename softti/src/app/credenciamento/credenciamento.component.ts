import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credenciamento',
  templateUrl: './credenciamento.component.html',
  styleUrls: ['./credenciamento.component.css'],
  imports: [FormsModule],
  standalone: true 
})
export class CredenciamentoComponent {
  @ViewChild('myModal') model!: ElementRef;
  clientObj: Cliente  = new Cliente()

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

export class Cliente {
  tipo!: 'fisica' | 'juridica';
  documento!: string;
  nomeRazaoSocial!: string;
  nomeFantasia!: string;
  cep!: string;
  endereco!: string;
  bairro!: string;
  cidade!: string;
  telefone!: string;
  email!: string;

  constructor(){
    this.documento = '';
    this.documento = "";
    this.nomeRazaoSocial = '';
    this.nomeFantasia = '';
    this.cep = '';
    this.endereco = '';
    this.bairro = '';
    this.cidade = '';
    this.telefone = '';
    this.email = '';
  }
}