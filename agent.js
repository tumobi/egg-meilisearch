'use strict';

const meilisearch = require('./lib/meilisearch');

module.exports = agent => {
  if (agent.config.meilisearch.agent) {
    meilisearch(agent);
  }
};
