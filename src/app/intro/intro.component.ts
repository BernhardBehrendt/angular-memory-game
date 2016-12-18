import {Component, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})

export class IntroComponent implements OnInit {

  @Output() goTo = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  ok() {
    this.goTo.emit('game');
  }

}
