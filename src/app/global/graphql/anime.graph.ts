import gql from 'graphql-tag';

export const ANIME_QUERY_LIST = gql`
  query getAnime {
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
