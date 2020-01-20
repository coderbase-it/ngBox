import { TestBed } from '@angular/core/testing';

import { ElementEngineService } from './element-engine.service';

describe('ElementEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementEngineService = TestBed.get(ElementEngineService);
    expect(service).toBeTruthy();
  });
});
