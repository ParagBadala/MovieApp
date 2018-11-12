import { TestBed } from '@angular/core/testing';

import { SwUrlService } from './sw-url.service';

describe('SwUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwUrlService = TestBed.get(SwUrlService);
    expect(service).toBeTruthy();
  });
});
