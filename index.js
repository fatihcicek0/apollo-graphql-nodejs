const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./graphql/resolvers');
const typeDefs = require('./graphql/typeDefs');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, connection }) => {
    if (connection) {
      return connection.context;
    } else {
      return { req };
    }
  }
});


server.listen().then(({ url }) => {
  console.log(`🚀 Sunucu çalışıyor: ${url}`);
});
