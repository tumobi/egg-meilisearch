'use strict';

/**
 * egg-meilisearch default config
 * @member Config#meilisearch
 * @property {String} SOME_KEY - some description
 */
exports.meilisearch = {
  default: {
    host: '',
    apiKey: '',
  },

  app: true,
  agent: false,

  // Single Database
  // client: {
  //   host: 'host',
  //   apiKey: '',
  // },

  // Multi Databases
  // clients: {
  //   db1: {
  //     host: 'host',
  //     apiKey: '',
  //   },
  //   db2: {
  //     host: 'host',
  //     apiKey: '',
  //   },
  // },
};
