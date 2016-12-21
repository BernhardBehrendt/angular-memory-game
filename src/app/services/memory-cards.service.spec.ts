/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MemoryCardsService } from './memory-cards.service';

describe('MemoryCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemoryCardsService]
    });
  });

  it('should ...', inject([MemoryCardsService], (service: MemoryCardsService) => {
    expect(service).toBeTruthy();
  }));
});
