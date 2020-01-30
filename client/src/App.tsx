import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './graphql/client';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
    <div className="App">
    </div>
    </ApolloProvider>
  );
}

export default App;
