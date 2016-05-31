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

/**
 * twitter|andgokevin -> [@andgokevin](twitter.com/andgokevin)
 * twitter|andgokevin|Kevin Ngo -> [Kevin Ngo](twitter.com/andgokevin)
 * github|ngokevin -> [ngokevin](github.com/ngokevin)
 * ngokevin -> [ngokevin](ngokevin)
 * http://ngokevin.com|Kevin Ngo -> [Kevin Ngo](ngokevin.com)
 */
hexo.extend.helper.register('blog_attribution', function (author) {
  var authorSplit = author.split('|');
  var display;
  var link;

  // Nothing to do.
  if (authorSplit.length === 1) { return author; }

  // Twitter handle.
  if (authorSplit[0] === 'twitter') {
    if (authorSplit.length === 2) {
      display = '@' + authorSplit[1];
      link = authorSplit[1];
    } else {
      display = authorSplit[2];
      link = authorSplit[1];
    }
    // Strip `@` from link.
    if (link[0] === '@') {
      link = link.substring(1);
    }
    return '<a class="blog-attribution" href="https://twitter.com/' + link + '">' +
      display + '</a>';
  }

  // GitHub username.
  if (authorSplit[0] === 'github') {
    if (authorSplit.length === 2) {
      display = authorSplit[1];
      link = authorSplit[1];
    } else {
      display = authorSplit[2];
      link = authorSplit[1];
    }
    return '<a class="blog-attribution" href="https://github.com/' + link + '">' +
      display + '</a>';
  }

  // Link.
  display = authorSplit[1];
  link = authorSplit[0];
  return '<a class="blog-attribution" href="' + link + '">' + display + '</a>';
});

hexo.extend.helper.register('markdown', function (text) {
  return hexo.render.renderSync({text: text, engine: 'markdown'});
});

hexo.extend.helper.register('blog_date', function (date) {
  return date.format('MMM D[,] YYYY');
});

hexo.extend.helper.register('blog_date_subtract_week', function (date) {
  return moment(date).subtract({weeks: 1}).format('MMM D[,] YYYY');
});

/**
 * #1000 -> github.com/aframevr/aframe/pull/1000
 * abcde -> github.com/aframevr/aframe/commit/abcde
 * aframevr/aframe-editor|#1000 -> github.com/aframevr/aframe-editor/pull/1000
 */
hexo.extend.helper.register('github_contribution', function (contribution, display) {
  var project = this.config.github.aframe.username + '/' + this.config.github.aframe.repo;
  var contributionSplit;
  display = display || contribution;

  if (contribution.indexOf('|') !== -1) {
    contributionSplit = contribution.split('|');
    project = contributionSplit[0];
    contribution = contributionSplit[1];
  }

  if (contribution[0] === '#') {
    contribution = contribution.substring(1);
    return '<a href="https://github.com/' + project + '/pull/' + contribution + '">' +
      display + '</a>';
  }
  return '<a href="https://github.com/' + project + '/commit/' + contribution + '">' +
    display + '</a>';
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

/**
 * Like Hexo's `url_for` helper but returns an absolute URL.
 */
hexo.extend.helper.register('absolute_url_for', function (path, options) {
  var url = urljoin(this.config.url, this.url_for(path, options));
  if (options && options.secure === false) {
    url = url.replace(/^https:/, 'http:');
  }
  return url;
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
  if (data.path && data.path.substr(-3) === '.md') {
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
