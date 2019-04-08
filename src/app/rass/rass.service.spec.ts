import { TestBed } from '@angular/core/testing';

import { RassService } from './rass.service';

describe('RassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RassService = TestBed.get(RassService);
    expect(service).toBeTruthy();
  });
});
