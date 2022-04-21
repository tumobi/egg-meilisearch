'use strict';

const meilisearch = require('./lib/meilisearch');

module.exports = app => {
  if (app.config.meilisearch.app) {
    meilisearch(app);
  }
};
