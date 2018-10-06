import { TestBed, inject } from '@angular/core/testing';

import { DiningService } from './dining-service.service';

describe('DiningServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiningService]
    });
  });

  it('should be created', inject([DiningService], (service: DiningService) => {
    expect(service).toBeTruthy();
  }));
});
