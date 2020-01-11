import { NgModule } from '@angular/core';
import { PokerEngineComponent } from './poker-engine.component';
import {PokerEngineRoutingModule} from './poker-engine-routing.module';



@NgModule({
  declarations: [PokerEngineComponent],
  imports: [
    PokerEngineRoutingModule
  ],
  exports: [PokerEngineComponent, PokerEngineRoutingModule ]
})
export class PokerEngineModule { }
