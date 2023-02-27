import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {KaamelotQuoteComponent} from "./kaamelot-quote/kaamelot-quote.component";
import {PokemonIndexComponent} from "./pokemon-index/pokemon-index.component";
import {SteamishHomeComponent} from "./steamish/steamish-home/steamish-home.component";
import {PublisherFormTDComponent} from "./steamish/publisher-form-t-d/publisher-form-t-d.component";
import {PublisherFormComponent} from "./steamish/publisher-form/publisher-form.component";
import {AccountFormComponent} from "./steamish/account-form/account-form.component";

const routes: Routes = [
  { path: 'cours', component: CourseComponent },
  { path: 'cours/:yob', component: CourseComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
  { path: 'kaamelot', component: KaamelotQuoteComponent },
  { path: 'pokemon', component: PokemonIndexComponent },
  { path: 'steamish/publisher/new-template', component: PublisherFormTDComponent },
  { path: 'steamish/publisher/new', component: PublisherFormComponent },
  { path: 'steamish/account/new', component: AccountFormComponent },
  { path: 'steamish', component: SteamishHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
