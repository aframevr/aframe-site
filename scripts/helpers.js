var utils = require('../lib/utils');

var pkg = require('../package');
var aframeCurrentSha = 'master';
try {
  aframeCurrentSha = pkg.dependencies.aframe.split('#')[1];
} catch (e) {
}

var isUrl = utils.isUrl;
var urljoin = utils.urljoin;

hexo.extend.helper.register('github_release_url', function (version) {
  version = version || ('v' + this.config.aframe_version);
  return urljoin(this.config.github.aframe.url, 'releases', 'tag', version);
});

hexo.extend.helper.register('github_file_url', function (path) {
  return urljoin(this.config.github.aframe.url, 'blob', aframeCurrentSha, path);
});

hexo.extend.helper.register('website_github_edit_url', function (path) {
  if (path.indexOf('docs/') !== -1) {
    return urljoin(this.config.github.aframe.url, 'edit', 'master', path.replace(/\.html$/, '.md'));
  } else {
    return urljoin(this.config.github.aframe_site.url, 'edit', 'master', this.config.source_dir, path.replace(/\.html$/, '.md'));
  }
});

hexo.extend.helper.register('page_url', function (path, options) {
  return this.url_for(path, options).replace(/index\.html$/, '');
});

hexo.extend.helper.register('example_url', function (item) {
  return urljoin(this.url_for('examples'), item.section, item.slug) + '/';
});

hexo.extend.helper.register('docs_url_prefix', function (item) {
  return this.page.source.split('/', 2).join('/') + '/';
});

hexo.extend.helper.register('is_external_url', isUrl);

hexo.extend.filter.register('urljoin', urljoin);

hexo.extend.filter.register('after_render:html', function (str, data) {
  if (data.path.substr(-3) === '.md') {
    str = str.replace(/href="([^"]+)\/index.md([^"]+)?"/g, 'href="$1/$2"')
             .replace(/href="([^"]+).md([^"]+)?"/g, 'href="$1.html$2"');
  }
  return str;
});
