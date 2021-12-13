import { Component, Input, OnInit } from '@angular/core';
import { Quote } from 'src/shared/quote.model';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.scss'],
})
export class QuotesListComponent implements OnInit {
  @Input() quotes: Quote[];

  constructor() {}

  ngOnInit(): void {}

  deleteQuote(quoteId:number){
    this.quotes = this.quotes.filter(q => q.id !== quoteId);
  }
}
