import gql from 'graphql-tag';
import { Queries } from './resolvers/Queries';


export const resolvers = {
    Query: Queries,
    //Mutation: Mutations
}

/**
 * Core definitions for the ApolloServer
 * {@link ApolloServer}
 */
export const typeDefs = gql`
    type Dragon {
        name: String!
        type: String!
        active: Boolean!
        id: String!
        flickr_images: [String!]!
        description: String!
    }
    type Query {
        getDragons: [Dragon]!
    }
`;
// TODO: Merge different 'gql' files into typeDef to have better control on the graphQL files
// and not have everything in just one file.
// const typesArray = loadFilesSync(path.join(__dirname, './types'));

// export const typeDefs = mergeTypeDefs(typesArray);
