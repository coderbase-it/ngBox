import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { KawaiEngineComponent } from './kawai-engine.component';
import { PlanetComponent } from './components/planet/planet.component';
import {KawaiEngineRoutingModule} from './kawai-engine-routing.module';
import { FaceComponent } from './base/face/face.component';
import {CommonModule} from '@angular/common';
import { IceCreamComponent } from './components/ice-cream/ice-cream.component';



@NgModule({
  declarations: [KawaiEngineComponent, PlanetComponent, FaceComponent, IceCreamComponent],
  imports: [
    KawaiEngineRoutingModule,
    CommonModule
  ],
  exports: [KawaiEngineComponent]
}
  )
export class KawaiEngineModule { }
