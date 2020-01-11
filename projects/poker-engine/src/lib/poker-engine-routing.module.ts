import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokerEngineComponent} from './poker-engine.component';


const routes: Routes = [
  {path: '', component: PokerEngineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokerEngineRoutingModule { }
