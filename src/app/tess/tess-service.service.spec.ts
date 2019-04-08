import { TestBed } from '@angular/core/testing';

import { TessServiceService } from './tess-service.service';

describe('TessServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TessServiceService = TestBed.get(TessServiceService);
    expect(service).toBeTruthy();
  });
});
