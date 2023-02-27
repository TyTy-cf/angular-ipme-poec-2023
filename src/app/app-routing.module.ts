import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {KaamelotQuoteComponent} from "./kaamelot-quote/kaamelot-quote.component";
import {PokemonIndexComponent} from "./pokemon-index/pokemon-index.component";
import {SteamishHomeComponent} from "./steamish/steamish-home/steamish-home.component";
import {PublisherFormComponent} from "./steamish/publisher-form/publisher-form.component";

const routes: Routes = [
  { path: 'cours', component: CourseComponent },
  { path: 'cours/:yob', component: CourseComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
  { path: 'kaamelot', component: KaamelotQuoteComponent },
  { path: 'pokemon', component: PokemonIndexComponent },
  { path: 'steamish/publisher/new', component: PublisherFormComponent },
  { path: 'steamish', component: SteamishHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
