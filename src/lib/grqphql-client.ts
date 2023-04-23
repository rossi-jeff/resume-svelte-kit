import { graphQlUrl } from './graphql-url';
import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient(graphQlUrl, {
	mode: 'cors'
});
