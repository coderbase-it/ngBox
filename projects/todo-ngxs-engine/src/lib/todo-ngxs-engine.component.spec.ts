import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNgxsEngineComponent } from './todo-ngxs-engine.component';

describe('TodoNgxsEngineComponent', () => {
  let component: TodoNgxsEngineComponent;
  let fixture: ComponentFixture<TodoNgxsEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoNgxsEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNgxsEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
