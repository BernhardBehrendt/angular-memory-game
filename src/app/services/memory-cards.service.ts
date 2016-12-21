import {environment} from '../../environments/environment';
import {Injectable} from '@angular/core';
import {MemoryCardInterface} from '../interfaces/memory-card';
import {MemoryCard} from '../classes/memory-card';
import {MemoryCards} from '../classes/memory-cards';

@Injectable()
export class MemoryCardsService {

  constructor() {}

  /**
   *
   * @method getAll
   * @returns {MemoryCards}
   */
  public getAll(): MemoryCards {
    return new MemoryCards(
      environment
        .memoryCards
        .map((memoryCard: MemoryCardInterface): MemoryCard => {
            return new MemoryCard(memoryCard);
          }
        ));
  }
}
