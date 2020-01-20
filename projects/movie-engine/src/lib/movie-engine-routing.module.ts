import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieEngineComponent} from './movie-engine.component';


const routes: Routes = [
  {path: '', component: MovieEngineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieEngineRoutingModule { }
