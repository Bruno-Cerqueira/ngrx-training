import { TestBed } from '@angular/core/testing';

import { AnimeDataService } from './anime-data.service';

describe('AnimeDataService', () => {
  let service: AnimeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
