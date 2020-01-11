import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UnicornlandEngineComponent} from './unicornland-engine.component';


const routes: Routes = [

  {path: '', component: UnicornlandEngineComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnicornlandEngineRouting { }
