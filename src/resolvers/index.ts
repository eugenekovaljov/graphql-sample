import { query } from './queries/index.js';
import { mutations } from './mutations/index.js';
// import { Author } from './typeDefs/author.js';

export const resolvers = {
    Query: query,
    Mutation: mutations
}
