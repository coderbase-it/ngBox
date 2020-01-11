import { TestBed } from '@angular/core/testing';

import { SnakegameEngineService } from './snakegame-engine.service';

describe('SnakegameEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SnakegameEngineService = TestBed.get(SnakegameEngineService);
    expect(service).toBeTruthy();
  });
});
