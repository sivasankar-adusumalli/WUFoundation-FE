import { TestBed } from '@angular/core/testing';

import { WufoundationService } from './wufoundation.service';

describe('WufoundationService', () => {
  let service: WufoundationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WufoundationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
