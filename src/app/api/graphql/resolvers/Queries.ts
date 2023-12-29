import * as DragonQueries from './dragon/DragonQueries'

/**
 * Constant that stores all of the projects queries, so it can be passed to the
 * apollo client as resolvers.
 */
export const Queries = {
    ...DragonQueries,
}