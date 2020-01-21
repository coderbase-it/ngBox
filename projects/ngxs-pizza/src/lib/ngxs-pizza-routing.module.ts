import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxsPizzaComponent} from './ngxs-pizza.component';


const routes: Routes = [
  {path: '', component: NgxsPizzaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxsPizzaRouting { }
