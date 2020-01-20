import { NgModule } from '@angular/core';
import { MovieEngineComponent } from './movie-engine.component';
import {MovieEngineRoutingModule} from './movie-engine-routing.module';



@NgModule({
  declarations: [MovieEngineComponent],
  imports: [
    MovieEngineRoutingModule
  ],
  exports: [MovieEngineComponent]
})
export class MovieEngineModule { }
