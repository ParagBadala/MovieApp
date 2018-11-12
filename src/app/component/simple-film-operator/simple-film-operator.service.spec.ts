import { TestBed } from '@angular/core/testing';

import { SimpleFilmOperatorService } from './simple-film-operator.service';

describe('SimpleFilmOperatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleFilmOperatorService = TestBed.get(SimpleFilmOperatorService);
    expect(service).toBeTruthy();
  });
});
