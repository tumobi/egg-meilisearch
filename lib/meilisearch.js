'use strict';

const assert = require('assert');
const { MeiliSearch } = require('meilisearch');

const createOneClient = (config, app) => {
  const { host, apiKey } = config;
  assert(host, '[egg-meilisearch] host is required.');

  app.coreLogger.info('[egg-meilisearch] connecting meilisearch server');

  const client = new MeiliSearch({
    host,
    apiKey,
  });

  app.beforeStart(async () => {
    const { status } = await client.health();
    app.coreLogger.info(`[egg-meilisearch] meilisearch health status ${status}`);
  });

  return client;
};

module.exports = app => {
  app.addSingleton('meilisearch', createOneClient);
};
