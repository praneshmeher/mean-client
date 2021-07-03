import { TestBed, inject } from '@angular/core/testing';

import { ServiceCenterService } from './service-center.service';

describe('ServiceCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCenterService]
    });
  });

  it('should be created', inject([ServiceCenterService], (service: ServiceCenterService) => {
    expect(service).toBeTruthy();
  }));
});
