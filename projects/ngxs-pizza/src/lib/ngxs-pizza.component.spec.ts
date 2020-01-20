import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsPizzaComponent } from './ngxs-pizza.component';

describe('NgxsPizzaComponent', () => {
  let component: NgxsPizzaComponent;
  let fixture: ComponentFixture<NgxsPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxsPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
