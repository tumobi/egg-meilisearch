# egg-meilisearch

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-meilisearch.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-meilisearch
[travis-image]: https://img.shields.io/travis/tumobi/egg-meilisearch.svg?style=flat-square
[travis-url]: https://travis-ci.org/tumobi/egg-meilisearch
[codecov-image]: https://img.shields.io/codecov/c/github/tumobi/egg-meilisearch.svg?style=flat-square
[codecov-url]: https://codecov.io/github/tumobi/egg-meilisearch?branch=master
[david-image]: https://img.shields.io/david/tumobi/egg-meilisearch.svg?style=flat-square
[david-url]: https://david-dm.org/tumobi/egg-meilisearch
[snyk-image]: https://snyk.io/test/npm/egg-meilisearch/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-meilisearch
[download-image]: https://img.shields.io/npm/dm/egg-meilisearch.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-meilisearch

egg plugin for [meilisearch](https://www.meilisearch.com/)

## Install

```bash
$ npm i egg-meilisearch --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.meilisearch = {
  enable: true,
  package: 'egg-meilisearch',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.meilisearch = {
  default: {
    host: '',
    apiKey: '',
  },
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

在索引 `movies` 中搜索包含关键词 `How` 的数据

```
await this.app.meilisearch.index('movies').search('How');
```

查看 [API reference](https://docs.meilisearch.com/reference/api/overview.html) 了解更多使用方法

## Questions & Suggestions

Please open an issue [here](https://github.com/tumobi/egg-meilisearch/issues).

## License

[MIT](LICENSE)
