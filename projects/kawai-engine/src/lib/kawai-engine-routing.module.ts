import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KawaiEngineComponent} from './kawai-engine.component';


const routes: Routes = [
  {path: '', component: KawaiEngineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KawaiEngineRoutingModule { }
