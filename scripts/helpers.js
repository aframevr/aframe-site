var moment = require('moment');
var urllib = require('url');

var utils = require('../lib/utils');
var pkg = require('../package');

var isUrl = utils.isUrl;
var urljoin = utils.urljoin;

var aframeCurrentSha = 'master';
try {
  aframeCurrentSha = pkg.dependencies.aframe.split('#')[1];
} catch (e) {}

hexo.extend.helper.register('blog_attribution', function (author) {
  // Twitter handle.
  if (author.indexOf('twitter|') === 0) {
    author = '@' + author.substring(8);
    return '<a class="blog-attribution" href="https://twitter.com/' + author + '">' +
      author + '</a>';
  }
  // GitHub username.
  if (author.indexOf('github|') === 0) {
    author = author.substring(7);
    return '<a class="blog-attribution" href="https://github.com/' + author + '">' +
      author + '</a>';
  }
  return author;
});

hexo.extend.helper.register('blog_date', function (date) {
  return date.format('MMM D[,] YYYY');
});

hexo.extend.helper.register('blog_date_subtract_week', function (date) {
  return moment(date).subtract({weeks: 1}).format('MMM D[,] YYYY');
});

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
    str = str.replace(/href="([^"]+)"/g, function (origStr, p1) {
      return 'href="' + convertMarkdownToHtmlUrl(p1) + '"';
    });
  }
  return str;
});


function convertMarkdownToHtmlUrl (url) {
  var urlObj = urllib.parse(url);
  if (!urlObj.pathname || urlObj.pathname[0] === '/') {
    // Do not rewrite absolute URLs.
    return url;
  }
  urlObj.pathname = urlObj.pathname.replace(/\.md$/, '.html')
                                   .replace('/index.html', '/');
  return urllib.format(urlObj);
}
