import { TestBed } from '@angular/core/testing';

import { AnnouceServiceService } from './annouce-service.service';

describe('AnnouceServiceService', () => {
  let service: AnnouceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
