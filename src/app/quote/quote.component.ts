import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;

  @Output() deleteQuoteEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  likeQuote() {
    this.quote.likes++;
    
  }

  dislikeQuote() {
    this.quote.dislikes++;
  }

  deleteQuote(){
    this.deleteQuoteEvent.emit(this.quote.id);
  }
}
