'use strict';

const assert = require('assert');
const mock = require('egg-mock');
const movies = require('./movies.json');

describe('test/meilisearch.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/meilisearch-test',
    });
    return app.ready();
  });

  beforeEach(async () => {
    // 创建索引并添加文档
    const { uid } = await app.meilisearch.index('movies').addDocuments(movies);

    // 等待任务完成
    let succeeded = false;
    while (!succeeded) {
      const { status } = await app.meilisearch.getTask(uid);
      succeeded = status === 'succeeded';
    }
  });

  afterEach(async () => {
    // 删除索引
    await app.meilisearch.deleteIndex('movies');
  });

  after(() => app.close());

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, meilisearch')
      .expect(200);
  });

  it('should GET /movies', async () => {
    const response = await app.httpRequest()
      .get('/movies')
      .expect(200);

    assert(response.body.length === 10);
  });
});
