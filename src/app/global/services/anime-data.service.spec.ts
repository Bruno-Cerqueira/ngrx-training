import { TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ANIME_QUERY_LIST, GENRE_QUERY_COLLECTION } from '../graphql/anime.graph';
import { AnimeDataServiceStub } from './anime-data-service.stub';

import { AnimeDataService } from './anime-data.service';

describe('AnimeDataService', () => {
  let service: AnimeDataService;
  let controller: ApolloTestingController;
  let genreList: Array<string>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule],
      providers: [AnimeDataService]
    });

    service = TestBed.inject(AnimeDataService);
    controller = TestBed.inject(ApolloTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when getGenreList is called', () => {
    genreList = ['action', 'suspense'];

    afterEach(() => {
      controller.verify();
    });

    it('should return genre list', async (done) => {
      service.getGenreList().then(data => {
        expect(data).toEqual(genreList);
        done();
      })

      const op = controller.expectOne(GENRE_QUERY_COLLECTION);

      op.flush({
        data: {
          GenreCollection: genreList,
        },
      });
    });
  });

  describe('when getAnimeList is called', () => {
    const pageData = {
      pageInfo: {
        total: 10,
        perPage: 2,
        currentPage: 1,
        lastPage: 5,
        hasNextPage: true
      },
      media: [
        {
          coverImage: {
            color: 'blue',
            extraLarge: 'urlExtra',
            large: 'urlLarge',
          },
          genres: ['Action', 'Adventure'],
          id: 1,
          title: {
            english: 'Cowboy Bebop',
            userPreferred: 'Cowboy Bebop',
          }
        }
      ],
    }

    afterEach(() => {
      controller.verify();
    });

    it('should return anime list', async (done) => {
      service.getAnimeList().then(data => {
        expect(data).toEqual(pageData);
        done();
      })

      const op = controller.expectOne(ANIME_QUERY_LIST);

      op.flush({
        data: {
          Page: pageData,
        }
      });
    });
  });
});
