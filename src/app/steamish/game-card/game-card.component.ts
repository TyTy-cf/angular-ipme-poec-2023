import {Component, Input} from '@angular/core';
import {IGame} from "../../../model/steamish/i-game";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {

  @Input()
  games: IGame[] = [];

  @Input()
  title: string = '';

}
