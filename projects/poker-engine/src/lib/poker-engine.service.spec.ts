import { TestBed } from '@angular/core/testing';

import { PokerEngineService } from './poker-engine.service';

describe('PokerEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokerEngineService = TestBed.get(PokerEngineService);
    expect(service).toBeTruthy();
  });
});
