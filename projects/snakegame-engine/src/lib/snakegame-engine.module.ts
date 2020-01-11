import { NgModule } from '@angular/core';
import { SnakegameEngineComponent } from './snakegame-engine.component';
import {SnakegameEngineRoutingModule} from './snakegame-engine-routing.module';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [SnakegameEngineComponent],
  imports: [
    CommonModule,
    SnakegameEngineRoutingModule
  ],
  exports: [SnakegameEngineComponent]
})
export class SnakegameEngineModule { }
