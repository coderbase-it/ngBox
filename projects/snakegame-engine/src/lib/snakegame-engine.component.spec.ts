import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakegameEngineComponent } from './snakegame-engine.component';

describe('SnakegameEngineComponent', () => {
  let component: SnakegameEngineComponent;
  let fixture: ComponentFixture<SnakegameEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakegameEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakegameEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
