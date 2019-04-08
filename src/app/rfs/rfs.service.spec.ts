import { TestBed } from '@angular/core/testing';

import { RfsService } from './rfs.service';

describe('RfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RfsService = TestBed.get(RfsService);
    expect(service).toBeTruthy();
  });
});
