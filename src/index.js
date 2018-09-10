import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import cookies from 'js-cookie';
import config from './config';

/**
 * ApolloClient options
 * @type {Object}
 */
const options = {
  uri: cookies.get(config.cookie.server.name) || config.server.url,
  headers: {
    authorization: cookies.get(config.cookie.authorization.name) || '',
    tenant: cookies.get(config.cookie.tenant.name) || 'public',
    locale: cookies.get(config.cookie.locale.name) || 'es',
  },
};

/**
 * ApolloClient instance
 * @type {ApolloClient}
 */
const client = new ApolloClient(options);

// expose variables
export const Cookies = cookies;
export const Graphql = gql;
export default client;
