import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {CountryInterface} from '../interfaces/country';
import {Country} from '../classes/country';
import {Countries} from '../classes/countries';

@Injectable()
export class CountriesService {

  constructor() {}

  /**
   *
   * @method getAll
   * @returns {Countries}
   */
  public getAll(): Countries {
    return new Countries(
      environment
        .memories
        .map((country: CountryInterface): Country => {
            return new Country(country);
          }
        ));
  }
}
