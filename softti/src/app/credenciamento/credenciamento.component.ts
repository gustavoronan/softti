import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credenciamento',
  templateUrl: './credenciamento.component.html',
  styleUrls: ['./credenciamento.component.css'],
  imports: [FormsModule],
  standalone: true 
})
export class CredenciamentoComponent implements OnInit {
  @ViewChild('myModal') model!: ElementRef;
  clientObj: Cliente  = new Cliente()
  clientList: Cliente[] = []

  ngOnInit(): void {
    const listaCliente = localStorage.getItem("angular")
    if(listaCliente != null){
      this.clientList = JSON.parse(listaCliente)
    }
  }

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

  //logica que utilizei para salvar no localstorage
  saveModel(){
    const isLocalPresent = localStorage.getItem("angular") //verificando se o item se encontra no localstorage
    if(isLocalPresent != null ){ //se existir
      const oldArray = JSON.parse(isLocalPresent) //convertendo a string do localstorage em um array novamente
      oldArray.push(this.clientObj) //adicionando o objeto
      localStorage.setItem('angular', JSON.stringify(oldArray)) //convertendo a string novamente e salvando no local com a chave
    } else{
      const newArr = []
      newArr.push(this.clientObj)
      localStorage.setItem('angular', JSON.stringify(newArr))
    }
    //apenas recarregando a lista para nao precisar dar reload na pagina
    this.clientList = JSON.parse(localStorage.getItem("angular") || '[]');

    this.closeModel();
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