import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Alexandre';

  dataUser = {
    nome: 'João',
    idade: 25,
    telefone: '(87)99845-8794'
  }

  

  title = 'curso-angular-hora-de-codar';
}
