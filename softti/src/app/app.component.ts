import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CredenciamentoComponent } from './credenciamento/credenciamento.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CredenciamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('myModal') model:ElementRef | undefined

  openModel(){
    const model = document.getElementById("myModal")
    if (model!= null){
      model.style.display = 'block'
    }
  }

  closeModel(){
    if(this.model != null){
      this.model.nativeElement.style.display = 'none';
    }
  }
}


