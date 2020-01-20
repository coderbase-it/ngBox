import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SnakegameEngineComponent} from './snakegame-engine.component';


const routes: Routes = [
  {path: '', component: SnakegameEngineComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnakegameEngineRoutingModule { }
