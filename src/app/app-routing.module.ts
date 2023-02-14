import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./course/course.component";
import {YahtzeeComponent} from "./yahtzee/yahtzee.component";
import {KaamelotQuoteComponent} from "./kaamelot-quote/kaamelot-quote.component";
import {PokemonIndexComponent} from "./pokemon-index/pokemon-index.component";
import {SteamishHomeComponent} from "./steamish-home/steamish-home.component";

const routes: Routes = [
  { path: 'cours', component: CourseComponent },
  { path: 'cours/:yob', component: CourseComponent },
  { path: 'yahtzee', component: YahtzeeComponent },
  { path: 'kaamelot', component: KaamelotQuoteComponent },
  { path: 'pokemon', component: PokemonIndexComponent },
  { path: 'steamish', component: SteamishHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
