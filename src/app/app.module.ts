import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { YahtzeeComponent } from './yahtzee/yahtzee.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { KaamelotQuoteComponent } from './kaamelot-quote/kaamelot-quote.component';
import { PokemonIndexComponent } from './pokemon-index/pokemon-index.component';
import { SteamishHomeComponent } from './steamish/steamish-home/steamish-home.component';
import { GameCardComponent } from './steamish/game-card/game-card.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PublisherFormTDComponent } from './steamish/publisher-form-t-d/publisher-form-t-d.component';
import { PublisherFormComponent } from './steamish/publisher-form/publisher-form.component';
import { AccountFormComponent } from './steamish/account-form/account-form.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpTokenInterceptor} from "../config/http-interceptor";

@NgModule({
  declarations: [
      AppComponent,
      NavbarComponent,
      CourseComponent,
      YahtzeeComponent,
      KaamelotQuoteComponent,
      PokemonIndexComponent,
      SteamishHomeComponent,
      GameCardComponent,
      PublisherFormTDComponent,
      PublisherFormComponent,
      AccountFormComponent,
      PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [
    {
      provide: 'rawUrl',
      useValue: 'https://steam-ish.test-02.drosalys.net/api/'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
