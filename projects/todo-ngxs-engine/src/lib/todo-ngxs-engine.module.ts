import { NgModule } from '@angular/core';
import { TodoNgxsEngineComponent } from './todo-ngxs-engine.component';
import {TodoNgxsEngineRoutingModule} from './todo-ngxs-engine-routing.module';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsModule} from '@ngxs/store';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TodoState} from './states/todo.state';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule, MatInputModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [TodoNgxsEngineComponent, TodoListComponent, TodoFormComponent],
  imports: [
    CommonModule,
    TodoNgxsEngineRoutingModule,
    NgxsModule.forFeature([
      TodoState
    ]),
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatGridListModule
  ],
  exports: [TodoNgxsEngineComponent]
})
export class TodoNgxsEngineModule { }
