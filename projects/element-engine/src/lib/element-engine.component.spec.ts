import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementEngineComponent } from './element-engine.component';

describe('ElementEngineComponent', () => {
  let component: ElementEngineComponent;
  let fixture: ComponentFixture<ElementEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
