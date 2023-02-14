import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import {HttpClientModule} from "@angular/common/http";
import { KaamelotQuoteComponent } from './kaamelot-quote/kaamelot-quote.component';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      CourseComponent,
      YahtzeeComponent,
      KaamelotQuoteComponent,
      PokemonIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
