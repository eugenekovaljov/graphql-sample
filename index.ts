import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './src/resolvers/index.js';
import typeDefs from './src/schemas/typeDefs.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => {
        // Get the user token from the headers.
        const token = req.headers.authorization || '';

        // Try to retrieve a user with the token
        const user = {
            name: "Test",
            token
        };

        // Add the user to the context
        return { user };
    },
}).then(({url}) => {
    console.log(`🚀  Server ready at: ${url}`);
});

