import { TestBed } from '@angular/core/testing';

import { NgxsPizzaService } from './ngxs-pizza.service';

describe('NgxsPizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxsPizzaService = TestBed.get(NgxsPizzaService);
    expect(service).toBeTruthy();
  });
});
