import { TestBed } from '@angular/core/testing';

import { AppliService } from './appli.service';

describe('AppliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppliService = TestBed.get(AppliService);
    expect(service).toBeTruthy();
  });
});
