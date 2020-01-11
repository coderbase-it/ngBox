import { NgModule } from '@angular/core';
import { UnicornlandEngineComponent } from './unicornland-engine.component';
import {UnicornlandEngineRouting} from './unicornland-engine-routing.module';



@NgModule({
  declarations: [UnicornlandEngineComponent],
  imports: [
    UnicornlandEngineRouting
  ],
  exports: [UnicornlandEngineComponent]
})
export class UnicornlandEngineModule { }
