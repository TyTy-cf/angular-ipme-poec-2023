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
import { SteamishHomeComponent } from './steamish-home/steamish-home.component';
import { GameCardComponent } from './game-card/game-card.component';

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      CourseComponent,
      YahtzeeComponent,
      KaamelotQuoteComponent,
      PokemonIndexComponent,
      SteamishHomeComponent,
      GameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'rawUrl',
      useValue: 'https://steam-ish.test-02.drosalys.net/api/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
