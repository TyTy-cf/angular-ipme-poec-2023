import { TestBed } from '@angular/core/testing';

import { CountryRepositoryService } from './country-repository.service';

describe('CountryRepositoryService', () => {
  let service: CountryRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
