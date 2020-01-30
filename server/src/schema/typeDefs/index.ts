import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
      id: Int!
      fullName: String!
      firstName: String!
      lastName: String!
      email: String!
      avatar: String!
    }
    type Query {
      User(id: ID): User!
      Users: [User!]!
    }
`;

export default typeDefs;
