import { NgModule } from '@angular/core';
import { CrmEngineComponent } from './crm-engine.component';
import {CrmEngineRoutingModule} from './crm-engine-routing.module';



@NgModule({
  declarations: [CrmEngineComponent],
  imports: [
    CrmEngineRoutingModule
  ],
  exports: [CrmEngineComponent]
})
export class CrmEngineModule { }
