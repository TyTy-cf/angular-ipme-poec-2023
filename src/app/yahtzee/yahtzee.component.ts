import { Component } from '@angular/core';
import {Yahtzee} from "../../model/yahtzee/yahtzee";

@Component({
  selector: 'app-yahtzee',
  templateUrl: './yahtzee.component.html',
  styleUrls: ['./yahtzee.component.scss']
})
export class YahtzeeComponent {

  private _yahtzee: Yahtzee = new Yahtzee();

  get yahtzee(): Yahtzee {
    return this._yahtzee;
  }

}
