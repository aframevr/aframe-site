var urljoin = require('urljoin.js');

var utils = require('../node_scripts/utils');

hexo.extend.generator.register('examples.json', function (locals) {
  return {
    path: 'examples/index.json',
    data: JSON.stringify(locals.data.examples)
  };
});

hexo.extend.generator.register('examples', function (locals) {
  var routes = [];

  function addRoute (path, data, layout) {
    routes.push({
      path: path,
      data: data,
      layout: layout
    });
  }

  addRoute('guide/', utils.createRedirectResponse(hexo, 'docs/guide/'));

  if (locals.data.examples) {
    var examples = locals.data.examples.showcase;
    var examplesLookup = {};
    var examplesRedirect = utils.createRedirectResponse(hexo, 'examples/');

    var sections = [];

    examples.forEach(function (example, idx) {
      var section = example.section;

      var permalink = urljoin('examples', section, example.slug, '/');
      example.type = 'examples';
      example.url = permalink;
      addRoute(permalink, example, 'examples');
      examplesLookup[permalink] = example;

      if (idx === 0) {
        addRoute('examples/', example, 'examples');
      }

      if (sections.indexOf(section) === -1) {
        sections.push(section);
      }
    });

    sections.forEach(function (sectionSlug) {
      // TODO: Eventually build out separate pages for each category in Examples.
      addRoute('examples/' + sectionSlug + '/', examplesRedirect);
    });

    hexo.locals.set('examples_by_urls', function () {
      return examplesLookup;
    });
  }

  return routes;
});

/**
 * Paginated blog.
 */
hexo.extend.generator.register('blog', function (locals) {
  var routes = [];
  var perPage = hexo.config.per_page;
  var posts = locals.posts.sort('date', -1);
  for (var i = 1, j = posts.length, page = 1; i < j; i += perPage, page++) {
    // blog/page/*/
    var route = {
      path: 'blog/' + page + '/',
      data: {
        blog_index: true,
        posts: posts.slice(i - 1, i - 1 + perPage),
      },
      layout: 'blog'
    };

    // Next.
    if (i + perPage < posts.length) {
      route.data.next = {
        pageNum: page + 1,
        path: '/blog/' + (page + 1) + '/',
        title: 'Next Page'
      };
    }

    // Prev.
    if (i > 1) {
      route.data.prev = {
        pageNum: page - 1,
        path: page - 1 === 1 ? 'blog/' : '/blog/' + (page - 1) + '/',
        title: 'Previous Page'
      };
    }

    // blog/ root alias of blog/page/1/.
    routes.push(route);
    if (page === 1) {
      var indexRoute = Object.assign({}, route);
      indexRoute.path = 'blog/';
      routes.push(indexRoute);
    }
  }
  return routes;
});
