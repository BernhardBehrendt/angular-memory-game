import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {toLabel} from '../helpers/string.to-label';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})

export class MemoryCardComponent implements OnInit {

  public toLabel = toLabel;
  public wasVisible: boolean = false;


  @Input() card: string;
  @Input() flipped: boolean;
  @Input() paired: boolean = false;
  @Output() selection = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit() {
  }


  selected() {
    if (!this.paired) {
      this.wasVisible = true;
      this.selection.emit(this.card);
    }
  }
}
