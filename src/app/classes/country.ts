import {CountryInterface} from '../interfaces/country';

export class Country {

  private _name: string;
  private _exit: string;

  constructor(country: CountryInterface) {
    this._name = country.name;
    this._exit = country.exit;
  }

  get name(): string {
    return this._name;
  }

  get exit(): string {
    return this._exit;
  }
}


