import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyNavComponent} from './components/my-nav/my-nav.component';
import {MaterialCustomModule} from '../material-custom/material-custom.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MyNavComponent],
  imports: [
    CommonModule,
    MaterialCustomModule,
    RouterModule
  ],
  exports: [ MyNavComponent]
})
export class UiModule { }
