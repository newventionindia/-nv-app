import { TestBed } from '@angular/core/testing';

import { NvHeaderService } from './nv-header.service';

describe('NvHeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NvHeaderService = TestBed.get(NvHeaderService);
    expect(service).toBeTruthy();
  });
});
