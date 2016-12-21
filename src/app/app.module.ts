import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// 3rd Party
import {PaginationModule} from '../../node_modules/ng2-bootstrap';
import {Ng2BootstrapModule} from '../../node_modules/ng2-bootstrap';

// Components
import {AppComponent} from './app.component';
import {MemoryComponent} from './memory/memory.component';
import {IntroComponent} from './intro/intro.component';
import {OutroComponent} from './outro/outro.component';
import {MemoryCardComponent} from './memory-card/memory-card.component';
import {GameStatisticsComponent} from './game-statistics/game-statistics.component';

// Services
import {MemoryCardsService} from './services/memory-cards.service';
import {StatisticsService} from './services/statistics.service';

@NgModule({

  declarations: [
    AppComponent,
    MemoryComponent,
    IntroComponent,
    OutroComponent,
    MemoryCardComponent,
    GameStatisticsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule,
    Ng2BootstrapModule
  ],

  providers: [
    MemoryCardsService,
    StatisticsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
