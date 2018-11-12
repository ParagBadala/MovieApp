import { TestBed } from '@angular/core/testing';

import { SimpleFilmAsyncPipeService } from './simple-film-async-pipe.service';

describe('SimpleFilmAsyncPipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleFilmAsyncPipeService = TestBed.get(SimpleFilmAsyncPipeService);
    expect(service).toBeTruthy();
  });
});
