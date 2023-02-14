import { TestBed } from '@angular/core/testing';

import { GameServiceRepositoryService } from './game-repository.service';

describe('GameServiceRepositoryService', () => {
  let service: GameServiceRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameServiceRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
