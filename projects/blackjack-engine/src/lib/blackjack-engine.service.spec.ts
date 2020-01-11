import { TestBed } from '@angular/core/testing';

import { BlackjackEngineService } from './blackjack-engine.service';

describe('BlackjackEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlackjackEngineService = TestBed.get(BlackjackEngineService);
    expect(service).toBeTruthy();
  });
});
