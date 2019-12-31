import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('NvHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseService = TestBed.get(BaseService);
    expect(service).toBeTruthy();
  });
});
