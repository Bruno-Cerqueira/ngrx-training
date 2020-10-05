import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { map } from 'rxjs/operators';

import { ANIME_QUERY_LIST, GENRE_QUERY_COLLECTION } from '../graphql/anime.graph';

@Injectable({
  providedIn: 'root'
})
export class AnimeDataService {

  constructor(private apollo: Apollo) { }

  async getAnimeList() {
    return this.apollo.query({
      query: ANIME_QUERY_LIST,
    })
    .toPromise()
    .then(data => console.log(data))
  }

  async getGenreList() {
    return this.apollo.query({
      query: GENRE_QUERY_COLLECTION,
    })
    .pipe(map((res: any) => res.data.GenreCollection))
    .toPromise()
    .then(data => console.log(data))
  }
}
