import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';

const app = express();
const port = 5000;

const publicGraphQLServer = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

publicGraphQLServer.applyMiddleware({app, path: '/graphql'});
app.use((_, res) => res.status(404).send('404)'));

app.listen(port, () => console.log(`App started on port: ${port}`));
