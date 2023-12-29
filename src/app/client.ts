import { ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * Host for the server connection.
 */
const client = new ApolloClient({
    //TODO: Change this once we have a remote server.
    uri: 'http://localhost:3000/api/graphql/',  
    cache: new InMemoryCache(),
});

export default client;