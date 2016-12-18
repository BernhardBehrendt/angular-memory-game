import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public view: string;

  constructor() {
    // TODO when already started save this
    // in session store to prevent repeating intros
    this.view = 'intro';
  }

  goTo(view: string): void {
    this.view = view
  }
}

