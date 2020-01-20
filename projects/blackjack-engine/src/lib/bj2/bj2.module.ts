import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card-view/card-view.component';
import { FlipComponent } from './flip/flip.component';
import { HandComponent } from './hand/hand.component';
import { ButtonPanelComponent } from './button-panel/button-panel.component';

import { DealerService } from './services/dealer.service';
import { GameStateService } from './services/game-state.service';
import {Bj2eRoutingModule} from './bj2-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FlipComponent,
    HandComponent,
    ButtonPanelComponent
  ],
  imports: [
    CommonModule,
    Bj2eRoutingModule
  ],
  providers: [
    DealerService,
    GameStateService
  ]
})
export class Bj2Module { }
