import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {

  @Input() name: string = '';
  @Input() user!: {nome: string, idade: number, telefone: string}  
  // exclamação depois do nome da variável, indica pro angular que essa variável vai ser inicializada com algum valor, só que não agora
}
