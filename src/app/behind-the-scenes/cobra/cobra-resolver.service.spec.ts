import { TestBed } from '@angular/core/testing';

import { CobraResolverService } from './cobra-resolver.service';

describe('CobraResolverService', () => {
  let service: CobraResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CobraResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
