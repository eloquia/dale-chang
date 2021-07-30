import { TestBed } from '@angular/core/testing';

import { CobraService } from './cobra.service';

describe('CobraService', () => {
  let service: CobraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
