import { Injectable } from "@angular/core";
import { AnimeDataService } from './anime-data.service';

@Injectable()
class AnimeDataServiceInjectable {
  getGenreList(): Array<string> {
    return ['Actions', 'Suspense'];
  }

  getAnimeList(): Object {
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

    return pageData;
  }
}

export const AnimeDataServiceStub = {
  provide: AnimeDataService,
  useClass: AnimeDataServiceInjectable,
}