import { NgModule } from '@angular/core';
import { NgrxPizzaComponent } from './ngrx-pizza.component';
import {NgrxPizzaRouting} from './ngrx-pizza-routing.module';



@NgModule({
  declarations: [NgrxPizzaComponent],
  imports: [
    NgrxPizzaRouting
  ],
  exports: [NgrxPizzaComponent]
})
export class NgrxPizzaModule { }
