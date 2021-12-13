import { Component } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-quotes';

  quotes: Quote[] = [
    new Quote(
      this.generateRandomId(),
      "Anthony J. D'Angelo",
      'Develop a passion for learning. If you do, you will never cease to grow.',
      new Date()
    ),
  ];

  generateRandomId() {
    return Math.floor(Math.random() * 100);
  }
}
