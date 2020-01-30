import { ApolloLink } from 'apollo-link';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache({
  dataIdFromObject: (object: any) => object.id || null,
});


const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    new HttpLink({ uri: 'http://localhost:5000/graphql' }),
  ]),
});

export default client;
