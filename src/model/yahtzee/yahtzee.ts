import {Dice} from "./dice";

export class Yahtzee {

  private _dices: Dice[] = [];
  private _subThrow: number = 0;

  start(): void {
    this._dices = [];
    for (let i = 0; i < 5; i++) {
      this._dices.push(new Dice());
    }
  }

  reroll(): void {
    for (const index in this._dices) {
      if (this._dices[index].isSelected) {
        this._dices[index] = new Dice();
      }
    }
    this._subThrow++;
  }

  getSumDice(): number {
    let sum: number = 0;
    for (const dice of this._dices) {
      sum += dice.value;
    }
    return sum;
  }

  get dices(): Dice[] {
    return this._dices;
  }

  get subThrow(): number {
    return this._subThrow;
  }


}
