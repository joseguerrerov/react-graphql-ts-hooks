import { gql } from 'apollo-boost';

export const supermarketsQuery = gql`
  query Supermarkets {
    Supermarkets {
        id
        name
        logo
    }
  }
`;
