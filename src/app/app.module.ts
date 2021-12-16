import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { QuoteComponent } from './quote/quote.component';
import { TimeElapsedPipe } from './pipes/time-elapsed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuotesListComponent,
    QuoteComponent,
    TimeElapsedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
