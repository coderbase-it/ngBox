import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {SharedModule} from './shared/shared.module';
import {MaterialCustomModule} from './material-custom/material-custom.module';
import {UiModule} from './ui/ui.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    MaterialCustomModule,
    UiModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([], {developmentMode: !environment.production}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
