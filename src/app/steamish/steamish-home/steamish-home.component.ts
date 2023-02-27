import {Component, OnInit} from '@angular/core';
import {IGame} from "../../../model/steamish/i-game";
import {GameRepositoryService} from "../../../service/steamish/game-repository.service";
import {catchError, forkJoin, throwError} from "rxjs";

@Component({
  selector: 'app-steamish-home',
  templateUrl: './steamish-home.component.html',
  styleUrls: ['./steamish-home.component.scss']
})
export class SteamishHomeComponent implements OnInit {

  gamesByPublishedAt: IGame[] = [];
  gamesByName: IGame[] = [];
  gamesByPrice: IGame[] = [];

  constructor(
    private gameRepository: GameRepositoryService
  ) {
  }

  ngOnInit(): void {
    // le "$" est une convention pour nommer les variables d'Observable
    //const $publishedAt = this.gameRepository.findAll(6, 'sort=game.publishedAt&direction=DESC');
    forkJoin([
      this.gameRepository.findAll(8, 'sort=game.publishedAt&direction=DESC'),
      this.gameRepository.findAll(8, 'sort=game.name&direction=ASC'),
      this.gameRepository.findAll(8, 'sort=game.price&direction=DESC'),
    ])
    .pipe(
      catchError(err => {
        // si ça se passe mal...
        return throwError(err);
      })
    )
    .subscribe(([gamesPublishedAt, gamesName, gamesPrice]) => {
      setTimeout(() => {
        this.gamesByPublishedAt = gamesPublishedAt.items;
        this.gamesByName = gamesName.items;
        this.gamesByPrice = gamesPrice.items;
      }, 2000);
    });
  }

}
