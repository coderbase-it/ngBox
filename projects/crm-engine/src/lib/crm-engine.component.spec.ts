import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmEngineComponent } from './crm-engine.component';

describe('CrmEngineComponent', () => {
  let component: CrmEngineComponent;
  let fixture: ComponentFixture<CrmEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
