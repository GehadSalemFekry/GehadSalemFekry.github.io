import { GraphQLClient } from 'graphql-request';
const GRAPHQL_ENDPOINT =
	'https://api-eu-central-1.graphcms.com/v2/ckygbr0971abn01xgbre26yyy/master';

// const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_API

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
