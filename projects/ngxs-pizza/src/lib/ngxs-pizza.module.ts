import { NgModule } from '@angular/core';
import { NgxsPizzaComponent } from './ngxs-pizza.component';
import {NgxsPizzaRouting} from './ngxs-pizza-routing.module';



@NgModule({
  declarations: [NgxsPizzaComponent],
  imports: [
    NgxsPizzaRouting
  ],
  exports: [NgxsPizzaComponent]
})
export class NgxsPizzaModule { }
