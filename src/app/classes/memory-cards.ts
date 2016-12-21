import {MemoryCardInterface} from '../interfaces/memory-card';
import {MemoryCard} from './memory-card';
import {shuffle} from '../helpers/array.shuffle';
export class MemoryCards {
  constructor(private memoryCards: MemoryCard[]) {

  }


  /**
   * Return a list of memory cards
   * @returns {string[]}
   */
  public getRandomizedList(level: number): string[] {
    let randomizedList: string[] = [];


    shuffle(this.memoryCards)
      .some(function (memoryCard: MemoryCardInterface, index: number) {

        randomizedList.push(memoryCard.a);
        randomizedList.push(memoryCard.b);

        return ((index + 1) === level);
      });

    return shuffle(randomizedList);
  }

  public isMatch(selection: string[]): boolean {
    let isMatch = false;

    this
      .memoryCards
      .some(function (memoryCard: MemoryCard): boolean {

        let a: string = memoryCard.a,
          b: string = memoryCard.b;


        if (
          a === selection[selection.length - 2] && b === selection[selection.length - 1] ||
          a === selection[selection.length - 1] && b === selection[selection.length - 2]
        ) {
          isMatch = true;
        }

        return isMatch;
      });

    return isMatch;
  }
}
