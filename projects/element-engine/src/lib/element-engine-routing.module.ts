import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementEngineComponent} from './element-engine.component';


const routes: Routes = [
  {path: '', component: ElementEngineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementEngineRoutingModule { }
