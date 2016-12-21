import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-statistics',
  templateUrl: './game-statistics.component.html',
  styleUrls: ['./game-statistics.component.scss']
})
export class GameStatisticsComponent implements OnInit {

  private _lessestPossibleClicks: number;
  private _currentClicks: number;
  private _startTime: Date;
  private _endTime: Date;

  private _clicks: any = {}; // Save timestamp and events (first memory-card, second memory-card, match, missmatch

  constructor() {

  }

  get lessestPossibleClicks(): number {
    return this._lessestPossibleClicks;
  }

  set lessestPossibleClicks(value: number) {
    this._lessestPossibleClicks = value;
  }

  get currentClicks(): number {
    return this._currentClicks;
  }

  set currentClicks(value: number) {
    this._currentClicks = value;
  }

  get startTime(): Date {
    return this._startTime;
  }

  set startTime(value: Date) {
    this._startTime = value;
  }

  get endTime(): Date {
    return this._endTime;
  }

  set endTime(value: Date) {
    this._endTime = value;
  }

  ngOnInit() {
    alert('INIT STATS');
  }
}
