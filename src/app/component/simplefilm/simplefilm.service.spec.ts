import { TestBed } from '@angular/core/testing';

import { SimplefilmService } from './simplefilm.service';

describe('SimplefilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimplefilmService = TestBed.get(SimplefilmService);
    expect(service).toBeTruthy();
  });
});
