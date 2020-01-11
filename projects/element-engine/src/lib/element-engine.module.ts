import { NgModule } from '@angular/core';
import { ElementEngineComponent } from './element-engine.component';
import {ElementEngineRoutingModule} from './element-engine-routing.module';



@NgModule({
  declarations: [ElementEngineComponent],
  imports: [
    ElementEngineRoutingModule
  ],
  exports: [ElementEngineComponent]
})
export class ElementEngineModule { }
