import gql from 'graphql-tag';

export const ANIME_QUERY_LIST = gql`
  query getAnimes {
    MediaList {
      media {
        id
        title {
          native
          english
        }
      }
    }
  }
`;

export const GENRE_QUERY_COLLECTION = gql`
  query getGenres {
    GenreCollection
  }
`;
