import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicornlandEngineComponent } from './unicornland-engine.component';

describe('UnicornlandEngineComponent', () => {
  let component: UnicornlandEngineComponent;
  let fixture: ComponentFixture<UnicornlandEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicornlandEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicornlandEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
