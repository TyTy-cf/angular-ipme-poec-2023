import { TestBed } from '@angular/core/testing';

import { AbstractServiceRepositoryService } from './abstract-repository.service';

describe('AbstractServiceRepositoryService', () => {
  let service: AbstractServiceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbstractServiceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
