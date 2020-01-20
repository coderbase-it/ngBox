import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KawaiEngineComponent } from './kawai-engine.component';

describe('KawaiEngineComponent', () => {
  let component: KawaiEngineComponent;
  let fixture: ComponentFixture<KawaiEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawaiEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KawaiEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
