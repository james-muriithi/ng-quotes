import { Component } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-quotes';

  quotes: Quote[] = [];

  

}
