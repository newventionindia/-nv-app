import { TestBed } from '@angular/core/testing';

import { NvSharedServicesService } from './nv-shared-services.service';

describe('NvSharedServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NvSharedServicesService = TestBed.get(NvSharedServicesService);
    expect(service).toBeTruthy();
  });
});
