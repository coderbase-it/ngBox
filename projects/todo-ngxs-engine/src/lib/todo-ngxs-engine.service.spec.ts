import { TestBed } from '@angular/core/testing';

import { TodoNgxsEngineService } from './todo-ngxs-engine.service';

describe('TodoNgxsEngineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoNgxsEngineService = TestBed.get(TodoNgxsEngineService);
    expect(service).toBeTruthy();
  });
});
