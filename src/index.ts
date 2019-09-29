import { ApolloServer } from 'apollo-server';
import { typeDefs } from './GraphQL/Schema';
import { resolvers } from './GraphQL/Resolvers';

const server = new ApolloServer({
  cors: true,
  typeDefs,
  resolvers,
  cacheControl: true,
})

server.listen().then(() => console.log('Server is running on http://localhost:4000'));
