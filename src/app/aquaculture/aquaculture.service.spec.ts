import { TestBed } from '@angular/core/testing';

import { AquacultureService } from './aquaculture.service';

describe('AquacultureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AquacultureService = TestBed.get(AquacultureService);
    expect(service).toBeTruthy();
  });
});
