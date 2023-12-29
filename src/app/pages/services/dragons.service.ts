import gql from "graphql-tag";

export const GET_DRAGONS = gql`
    query Query {
        getDragons {
            name
            active
            type
            id
            flickr_images
            description
        }
    }`;