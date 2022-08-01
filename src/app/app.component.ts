import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // title = 'car-sell';
 text = 'cc';
/*
 displayText= false;
 onClickButton(): void {
this.displayText=this.displayText ? false : true;
 }
*/

 cars =[

  {
    id:0,
    brand: 'Renault',
    model: 'laguna',
    color: 'gray'
  },
  {
    id:1,
    brand: 'Peugeot',
    model: '508',
    color: 'red'
  },
  {
    id:2,
    brand: 'opel',
    model: 'corsa',
    color: 'blue'
  }

];
}
