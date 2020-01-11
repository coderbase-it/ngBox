import { NgModule } from '@angular/core';
import { BlackjackEngineComponent } from './blackjack-engine.component';
import {BlackJackEngineRoutingModule} from './blackjack-engine-routing.module';
import { ForNumberPipe } from './pipes/for-number.pipe';
import { LobbyComponent } from './components/lobby/lobby.component';
import { PlayerComponent } from './components/player/player.component';
import { GameComponent } from './components/game/game.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [BlackjackEngineComponent, ForNumberPipe, LobbyComponent, PlayerComponent, GameComponent],
  imports: [
    CommonModule,
    BlackJackEngineRoutingModule,
    FormsModule
  ],
  exports: [BlackjackEngineComponent]
})
export class BlackjackEngineModule { }
