import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrmEngineComponent} from './crm-engine.component';


const routes: Routes = [
  {path: '', component: CrmEngineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmEngineRoutingModule { }
