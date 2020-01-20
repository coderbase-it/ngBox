import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliCardComponent } from './appli-card.component';

describe('AppliCardComponent', () => {
  let component: AppliCardComponent;
  let fixture: ComponentFixture<AppliCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
