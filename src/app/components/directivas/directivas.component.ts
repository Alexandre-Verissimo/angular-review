import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title']

  underline = 'underline-title'

}
