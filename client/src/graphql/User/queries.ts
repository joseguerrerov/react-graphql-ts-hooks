import { gql } from 'apollo-boost';

export const usersQuery = gql`
  query Users {
    Users{
      id
      fullName
      firstName
      lastName
      email
      avatar
    }
  }
`;
