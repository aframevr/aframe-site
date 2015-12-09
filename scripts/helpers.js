var utils = require('../lib/utils');

hexo.extend.helper.register('external_example_url', function (path) {
  return utils.isUrl(path) ? path : utils.urljoin(this.config.examples.base_url, path);
});

hexo.extend.helper.register('github_release_url', function (version) {
  return this.config.github_url + '/releases/tag/' + (version || ('v' + this.config.aframe_version));
});

hexo.extend.helper.register('github_file_url', function (path) {
  return this.config.github_url + '/blob/master/' + path;
});

hexo.extend.helper.register('page_url', function (path, options) {
  return this.url_for(path, options).replace(/index\.html$/, '');
});

hexo.extend.filter.register('urljoin', utils.urljoin);
