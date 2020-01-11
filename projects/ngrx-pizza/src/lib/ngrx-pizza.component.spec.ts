import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPizzaComponent } from './ngrx-pizza.component';

describe('NgrxPizzaComponent', () => {
  let component: NgrxPizzaComponent;
  let fixture: ComponentFixture<NgrxPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
