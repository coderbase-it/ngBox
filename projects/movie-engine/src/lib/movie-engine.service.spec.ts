import { TestBed } from '@angular/core/testing';

import { MovieEngineService } from './movie-engine.service';

describe('MovieEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieEngineService = TestBed.get(MovieEngineService);
    expect(service).toBeTruthy();
  });
});
