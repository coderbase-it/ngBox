import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoNgxsEngineComponent} from './todo-ngxs-engine.component';


const routes: Routes = [
  {path: '', component: TodoNgxsEngineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoNgxsEngineRoutingModule { }
