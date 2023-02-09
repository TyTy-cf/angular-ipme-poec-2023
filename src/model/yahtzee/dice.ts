
export class Dice {

  private readonly _value: number = 1;
  private readonly _image: string = '';
  private _isSelected: boolean = false;

  constructor() {
    this._value = Math.floor(Math.random() * 6 + 1);
    this._image = 'assets/dices/' + this._value + '.png';
  }

  get value(): number {
    return this._value;
  }

  get image(): string {
    return this._image;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }
}
