import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackEngineComponent } from './blackjack-engine.component';

describe('BlackjackEngineComponent', () => {
  let component: BlackjackEngineComponent;
  let fixture: ComponentFixture<BlackjackEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
