import { Injectable } from "@angular/core";
import { AnimeDataService } from './anime-data.service';

@Injectable()
class AnimeDataServiceInjectable {
  getGenreList(): Array<string> {
    return ['Actions', 'Suspense'];
  }
}

export const AnimeDataServiceStub = {
  provide: AnimeDataService,
  useClass: AnimeDataServiceInjectable,
}