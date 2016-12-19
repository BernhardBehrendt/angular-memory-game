import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {toLabel} from '../helpers/string.to-label';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  public toLabel = toLabel;


  @Input() card: string;
  @Input() flipped: boolean;
  @Input() scale: number;
  @Input() paired: boolean = false;
  @Output() selection = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      console.log(this.paired);
    }, 5000);
  }


  selected() {
    if (!this.paired) {
      this.selection.emit(this.card);
    } else {
      console.log('already paired');
    }
  }
}
