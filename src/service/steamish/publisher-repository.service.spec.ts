import { TestBed } from '@angular/core/testing';

import { PublisherRepositoryService } from './publisher-repository.service';

describe('PublisherRepositoryService', () => {
  let service: PublisherRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublisherRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
