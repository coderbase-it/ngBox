import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgrxPizzaComponent} from './ngrx-pizza.component';



const routes: Routes = [
  {path: '', component: NgrxPizzaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxPizzaRouting{}
