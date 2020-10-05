import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ANIME_QUERY_LIST } from '../graphql/anime.graph';

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
}
