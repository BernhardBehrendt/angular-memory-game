import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.scss']
})
export class OutroComponent implements OnInit {

  @Output() goTo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  ok() {
    this.goTo.emit('game');
  }
}
