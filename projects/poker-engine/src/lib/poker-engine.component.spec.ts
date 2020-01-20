import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerEngineComponent } from './poker-engine.component';

describe('PokerEngineComponent', () => {
  let component: PokerEngineComponent;
  let fixture: ComponentFixture<PokerEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
