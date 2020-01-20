import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEngineComponent } from './movie-engine.component';

describe('MovieEngineComponent', () => {
  let component: MovieEngineComponent;
  let fixture: ComponentFixture<MovieEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
