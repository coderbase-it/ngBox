import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'lib-todo-ngxs-engine',
  template: `
    <p>

      🧙🧙  Libraire Todo Ngxs 🧙🧙
    </p>
    <mat-grid-list cols="2" rowHeight="100%" >
      <mat-grid-tile>
        <lib-todo-form></lib-todo-form>
      </mat-grid-tile>
      <mat-grid-tile>
        <lib-todo-list></lib-todo-list>
      </mat-grid-tile>
    </mat-grid-list>


  `,
  styles: ['mat-list { overflow: auto; }\n']
})
export class TodoNgxsEngineComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
