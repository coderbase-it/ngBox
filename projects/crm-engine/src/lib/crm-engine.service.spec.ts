import { TestBed } from '@angular/core/testing';

import { CrmEngineService } from './crm-engine.service';

describe('CrmEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrmEngineService = TestBed.get(CrmEngineService);
    expect(service).toBeTruthy();
  });
});
