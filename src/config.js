module.exports = {
  server: {
    url: 'http://graphql.control.fitness/graphql',
  },
  cookie: {
    authorization: {
      name: 'cf-token',
    },
    server: {
      name: 'cf-server-url',
    },
    tenant: {
      name: 'cf-tenant',
    },
    locale: {
      name: 'cf-locale',
    },
  },
};
