'use strict';

const Controller = require('egg').Controller;

class MoviesController extends Controller {
  async index() {
    const { hits } = await this.app.meilisearch.index('movies').search('');
    this.ctx.body = hits;
  }
}

module.exports = MoviesController;
