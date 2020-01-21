import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from './containers/home.component';
import {AppliCardComponent} from './components/appli-card/appli-card.component';
import {MaterialCustomModule} from '../material-custom/material-custom.module';


@NgModule({
  declarations: [
    HomeComponent,
    AppliCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialCustomModule
  ]
})
export class HomeModule { }
