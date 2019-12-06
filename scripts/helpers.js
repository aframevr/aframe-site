var cheerio = require('cheerio');
var moment = require('moment');
var striptags = require('striptags');
var urljoin = require('urljoin.js');

var multidep = require('../multidep');
var pkg = require('../package');
var utils = require('../node_scripts/utils');

var isUrl = utils.isUrl;

var aframeVersions = multidep.versions.aframe.map(function (version) {
  if (version.constructor === Array) { return version[1]; }
  return version;
});

var MASTER = 'master';
var aframeCurrentSha = MASTER;
try {
  aframeCurrentSha = pkg.dependencies.aframe.split('#')[1];
} catch (e) {}

/**
 * Generate data structure for generating table of contents.
 *
 * @param {string} content - Page content.
 * @returns {array} [{title: 'Title', link: '#anchor', children: []}]
 */
hexo.extend.helper.register('table_of_contents', function (content) {
  var $ = cheerio.load(content);
  var h2Set = $('h2');
  var toc = [];

  // Get H2s.
  var items = h2Set.map(function (h2) {
    var $h2 = $(this);

    // Add H2.
    var link = $h2.find('a')[0];
    var item = {
      title: link.attribs.title,
      href: link.attribs.href.toLowerCase(),
      children: []
    };

    // Get H3s. Loop until we hit an H2 or until no more siblings.
    var links = $h2.nextUntil('h2', 'h3').find('a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].attribs.href.indexOf('#') !== 0) { continue; }
      item.children.push({
        title: links[i].attribs.title,
        href: links[i].attribs.href.toLowerCase()
      });
    }
    return item;
  });

  // Convert to be `forEach`able.
  for (var i = 0; i < items.length; i++) {
    toc.push(items[i]);
  }
  return toc;
});

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
      display = authorSplit[1];
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
  return moment(date).format('MMM D[,] YYYY');
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

/**
 * Get GitHub edit URL.
 * - Change .html to .md.
 * - For docs, must remove the active version (e.g., docs/0.2.0/guide.html -> docs/guide.md).
 */
hexo.extend.helper.register('website_github_edit_url', function (path) {
  // For docs.
  if (path.indexOf('docs/') !== -1) {
    var activeVersion = path.split('/')[path.split('/').indexOf('docs') + 1];
    return urljoin(this.config.github.aframe.url, 'edit', MASTER,
                   path.replace('docs/' + activeVersion, 'docs').replace(/\.html$/, '.md'));
  }
  // For blog posts.
  return urljoin(this.config.github.aframe_site.url, 'edit', MASTER, this.config.source_dir,
                 path.replace(/\.html$/, '.md'));
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

hexo.extend.helper.register('docs_url_prefix', function (item) {
  return this.page.source.split('/', 2).join('/') + '/';
});

/**
 * Return actively-being-viewed version of the docs based on page.
 * Extract <VERSION> out of `.../docs/<VERSION>/...`.
 */
hexo.extend.helper.register('docs_active_version', function (page) {
  var splitPath = page.path.split('/');
  var docIndex = splitPath.indexOf('docs');
  if (docIndex === -1) { return hexo.config.aframe_version; }
  return splitPath[docIndex + 1];
});

/**
 * Sort documentation pages. Pages that have `order` go first. Then alphabetized by title.
 */
hexo.extend.helper.register('docs_nav_sort', function (pages) {
  var orderedPages = [];
  var alphabetizedPages = [];
  pages.forEach(function addOrderedPages (page) {
    if ('order' in page) {
      orderedPages.push(page);
      return;
    }
    alphabetizedPages.push(page);
  });
  orderedPages = orderedPages.sort(function sort (pageA, pageB) {
    if (pageA.order < pageB.order) { return -1; }
    if (pageA.order > pageB.order) { return 1; }
    return 0;
  });
  alphabetizedPages = alphabetizedPages.sort(function sort (pageA, pageB) {
    if (pageA.title < pageB.title) { return -1; }
    if (pageA.title > pageB.title) { return 1; }
    return 0;
  });
  return orderedPages.concat(alphabetizedPages);
});

/**
 * Retrieve first page of a version's documentation. The first page will be determined
 * using section_order + order. Generally, whichever page has `{section_order: 1, order: 1}`.
 *
 * docs_root_path(site.pages, '0.2.0')
 * >> docs/0.2.0/guide/
 *
 * @param {object} pages - site.pages.
 */
hexo.extend.helper.register('docs_root_path', function (pages, version) {
  var page = docs_version_filter(pages, version).find({parent_section: 'docs'})
                                                .sort('section_order')
                                                .sort('order').data[0];
  return '/' + page.path.replace('index.html', '');
});

/**
 * Filter documentation navigation to only include pages of the version being browsed.
 */
hexo.extend.helper.register('docs_version_filter', function (pages, version) {
  return docs_version_filter(pages, version);
});
function docs_version_filter (pages, version) {
  return pages.filter(function (page) {
    return page.path.indexOf('docs/' + version) !== -1;
  });
}

/**
 * Return list of A-Frame versions, including `master`.
 * Order (reverse chronological): master, current, <oldVersions>.
 */
hexo.extend.helper.register('docs_versions', function () {
  return [MASTER].concat(aframeVersions.sort().reverse());
});

hexo.extend.helper.register('is_external_url', isUrl);

/**
 * Generate description for `<meta name="description">`.
 */
hexo.extend.helper.register('meta_description', function (page) {
  // If blog or documentation, return article excerpt.
  if (page.layout === 'docs' || (page.layout === 'blog' && !page.blog_index)) {
    return striptags(page.excerpt).substring(0, 280);
  }
  // Else, return vanilla description.
  return hexo.config.description;
});

/**
 * Infer image for `<meta property="og:image">` and Twitter card.
 */
hexo.extend.helper.register('meta_image', function (page, defaultCard) {
  // If blog, return blog image.
  if (page.layout === 'blog' && !page.blog_index && page.image &&
      !page.image.src.endsWith('.gif')) {
    return 'images/blog/' + page.image.src;
  }
  // Else, return default card image.
  return defaultCard;
});

hexo.extend.helper.register('get_last_post', function (posts) {
  return posts.filter(post => !post.newsletter)[0];
});
