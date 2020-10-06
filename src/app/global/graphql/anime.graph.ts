import gql from 'graphql-tag';

export const ANIME_QUERY_LIST = gql`
  query getAnimes($genres: [String], $page: Int = 1) {
    Page(page: $page, perPage: 20) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(genre_in: $genres) {
        id
        title {
          english
          userPreferred
        }
        coverImage {
          extraLarge
          large
          color
        }
        genres
      }
    }
  }
`;

export const GENRE_QUERY_COLLECTION = gql`
  query getGenres {
    GenreCollection
  }
`;
