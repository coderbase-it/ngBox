import { TestBed } from '@angular/core/testing';

import { NgrxPizzaService } from './ngrx-pizza.service';

describe('NgrxPizzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgrxPizzaService = TestBed.get(NgrxPizzaService);
    expect(service).toBeTruthy();
  });
});
