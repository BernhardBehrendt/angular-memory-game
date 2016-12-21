import {MemoryCardInterface} from '../interfaces/memory-card';

export class MemoryCard {

  private _a: string;
  private _b: string;

  constructor(memoryCardData: MemoryCardInterface) {
    this._a = memoryCardData.a;
    this._b = memoryCardData.b;
  }

  get a(): string {
    return this._a;
  }

  get b(): string {
    return this._b;
  }
}


