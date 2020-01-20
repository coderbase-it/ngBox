import { TestBed } from '@angular/core/testing';

import { KawaiEngineService } from './kawai-engine.service';

describe('KawaiEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KawaiEngineService = TestBed.get(KawaiEngineService);
    expect(service).toBeTruthy();
  });
});
