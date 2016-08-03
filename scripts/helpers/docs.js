var multidep = require('../../multidep');
var pkg = require('../../package.json');

var aframeVersions = multidep.versions.aframe;
var MASTER = 'master';

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
