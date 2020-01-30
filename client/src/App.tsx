import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';
import Users from './components/Users';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  );
}

export default App;
