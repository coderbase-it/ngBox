import { TestBed } from '@angular/core/testing';

import { UnicornlandEngineService } from './unicornland-engine.service';

describe('UnicornlandEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnicornlandEngineService = TestBed.get(UnicornlandEngineService);
    expect(service).toBeTruthy();
  });
});
