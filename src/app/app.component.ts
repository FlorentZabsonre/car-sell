import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'car-sell';
  paragraphId=0;
  onClickButton(): void
  {
    console.log('hello wolrd!!!');
  }
}
