import {CountryInterface} from '../interfaces/country';
import {Country} from './country';
import {shuffle} from '../helpers/array.shuffle';
export class Countries {
  constructor(private countries: Country[]) {

  }


  /**
   * Return a list of memory cards
   * @returns {string[]}
   */
  public getRandomizedList(level: number): string[] {
    let randomizedList: string[] = [];


    shuffle(this.countries)
      .some(function (country: CountryInterface, index: number) {

        randomizedList.push(country.name);
        randomizedList.push(country.exit);

        return ((index + 1) === level);
      });

    return shuffle(randomizedList);
  }

  public isMatch(selection: string[]): boolean {
    let isMatch = false;

    this
      .countries
      .some(function (country: Country): boolean {

        let name: string = country.name;
        let exit: string = country.exit;

        // let name: string = '';
        // let exit: string = '';

        if (name === selection[selection.length - 2] && exit === selection[selection.length - 1] ||
          name === selection[selection.length - 1] && exit === selection[selection.length - 2]) {
          isMatch = true;
        }

        return isMatch;
      });

    return isMatch;
  }
}
