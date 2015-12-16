var utils = require('../lib/utils');

var isUrl = utils.isUrl;
var urljoin = utils.urljoin;

hexo.extend.helper.register('external_example_url', function (path) {
  return utils.isUrl(path) ? path : utils.urljoin(this.config.examples.base_url, path, '/');
});

hexo.extend.helper.register('github_release_url', function (version) {
  version = version || ('v' + this.config.aframe_version);
  return urljoin(this.config.github.aframe.url, 'releases', 'tag', version);
});

hexo.extend.helper.register('github_file_url', function (path) {
  return urljoin(this.config.github.aframe.url, 'blob', 'master', path);
});

hexo.extend.helper.register('website_github_file_url', function (path) {
  return urljoin(this.config.github.aframe_site.url, 'blob', 'master', this.config.source_dir, path.replace(/\.html$/, '.md'));
});

hexo.extend.helper.register('page_url', function (path, options) {
  return this.url_for(path, options).replace(/index\.html$/, '');
});

hexo.extend.helper.register('is_external_url', isUrl);

hexo.extend.filter.register('urljoin', urljoin);
