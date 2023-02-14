
export class Pokemon {

  private _isDisplayShiny: boolean = false;

  constructor(
    private _id: number,
    private _name: string,
    private _imageDefault: string,
    private _imageShiny: string
  ) { }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get imageDefault(): string {
    return this._imageDefault;
  }

  set imageDefault(value: string) {
    this._imageDefault = value;
  }

  get imageShiny(): string {
    return this._imageShiny;
  }

  set imageShiny(value: string) {
    this._imageShiny = value;
  }

  get isDisplayShiny(): boolean {
    return this._isDisplayShiny;
  }

  set isDisplayShiny(value: boolean) {
    this._isDisplayShiny = value;
  }
}
