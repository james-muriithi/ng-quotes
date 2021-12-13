import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
})
export class QuoteFormComponent implements OnInit {
  author: string;
  quote: string;

  @Output() addNewQuoteEvent = new EventEmitter<Quote>();

  constructor() {}

  ngOnInit(): void {}

  addNewQuote(){
    if (this.quote && this.author) {
      const quote = new Quote(
        Quote.generateRandomId(),
        this.author,
        this.quote,
        new Date()
      );
      this.addNewQuoteEvent.emit(quote);
      this.author = this.quote = '';
    }else{
      alert("Please fill all the details");
    }
      
  }
}
