// Core
import {Component, Output, EventEmitter, OnInit} from '@angular/core';

// Environment
import {environment} from '../../environments/environment';

// Classes
import {MemoryCards} from '../classes/memory-cards';
// import {random} from '../helpers/number.random';

// Services
import {MemoryCardsService} from '../services/memory-cards.service';
import {StatisticsService} from "../services/statistics.service";


@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})

export class MemoryComponent implements OnInit {

  @Output() goTo = new EventEmitter<string>();

  public cards: string[] = [];
  public rotations: any = {};
  public selection: string[] = [];
  public pairs: string[] = [];

  public confirm = false;


  public defaultLevel: number = 2;
  public levels: number[] = [3, 6, 9, 12, 15, 18, 21, 28];
  public level: number = this.getLevel();

  private _locked: boolean = false;
  private _memoryCards: MemoryCards;
  private _resetDuration: number = 3;

  constructor(private _MemoryCardsService: MemoryCardsService, private _statisticsServise: StatisticsService) {
    this._memoryCards = _MemoryCardsService.getAll();
  }

  ngOnInit() {
  }

  start(): void {
    this.cards = this._memoryCards.getRandomizedList(this.getLevel());

    this.calculateRotations();
  }

  leave(): void {
    this.confirm = true;
  }

  cancel(): void {
    this.confirm = false;
  }

  exit(): void {
    this.confirm = false;
    this.cards = [];
  }

  getLevel(): number {
    return this.level;
  }

  setLevel(level: any) {
    this.level = this.levels[level.page - 1];
  }

  calculateRotations(): void {
    this
      .cards
      .forEach((cardText: string): void => {
          this.rotations[cardText] = 0
        }
      );
  }

  resetSelection(): void {
    this.selection.splice(this.selection.length - 2, 2);
  }

  doSelection(label: string): void {
    if (!this._locked) {
      this._locked = true;
      this.selection.push(label);

      if (this.selection.length % 2 === 0) {
        let isMatch: boolean = this._memoryCards.isMatch(this.selection);

        if (isMatch) {

          this.pairs.push(this.selection[this.selection.length - 2]);
          this.pairs.push(this.selection[this.selection.length - 1]);

          this.isFinished();
          this._locked = false;
        } else {
          setTimeout(() => {
            this.resetSelection();
            this._locked = false;
          }, this._resetDuration / 4 * 1000);
        }
      } else {
        this._locked = false;
      }
    }
  }

  public isFinished() {
    if (this.cards.length === this.selection.length) {
      setTimeout(() => {
        this.goTo.emit('outro');
      }, this._resetDuration * 1000);
    }
  }
}
