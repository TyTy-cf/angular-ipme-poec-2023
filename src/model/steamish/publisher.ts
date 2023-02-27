
export class Publisher {

  private _name: string = '';
  private _website: string = '';
  private _country: {
    slug: string;
  } = {
    slug: ''
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get website(): string {
    return this._website;
  }

  set website(value: string) {
    this._website = value;
  }

  get country(): { slug: string } {
    return this._country;
  }

  set country(value: { slug: string }) {
    this._country = value;
  }
}
