import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../services/countries.service';
import {Countries} from '../classes/countries';
import {random} from '../helpers/number.random';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})

export class MemoryComponent implements OnInit {

  public cards: string[] = [];
  public rotations: any = {};
  public selection: string[] = [];


  public defaultLevel: number = 2;
  public levels: number[] = [3, 6, 9, 12, 15, 18, 21, 28];
  public level: number = this.getLevel();
  public scales: any = environment.scales;

  private _locked: boolean = false;
  private _countries: Countries;
  private _resetDuration: number = .8;


  constructor(private _countriesservice: CountriesService) {
    this._countries = _countriesservice.getAll();
  }

  ngOnInit() {
    // this.start();
  }

  start(): void {
    this.cards = this._countries.getRandomizedList(this.getLevel());

    this.calculateRotations();
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
          this.rotations[cardText] = random(-3.14, 3.14);
        }
      );
  }

  resetSelection(): void {
    this.selection = [];
  }

  removeCards(): void {
    this.selection.forEach((cardName: string): void => {
      this.cards.splice(this.cards.indexOf(cardName), 1);
    });

    this.resetSelection();
  }

  doSelection(label: string): void {
    if (!this._locked) {
      this._locked = true;
      this.selection.push(label);

      if (this.selection.length === 2) {
        let isMatch: boolean = this._countries.isMatch(this.selection);

        if (isMatch) {

          this.removeCards();

          this.finish();

          this._locked = false;
        } else {
          setTimeout(() => {
            this.resetSelection();
            this._locked = false;
          }, this._resetDuration * 1000);
        }
      } else {
        this._locked = false;
      }
    }

  }

  public finish() {
    if (this.cards.length === 0) {
      alert('YOU WON');
    }
  }
}
