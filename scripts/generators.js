var utils = require('../lib/utils');

hexo.extend.generator.register('blog-post-introducing-aframe', function (locals) {
  return {
    path: 'blog/2015/12/16/0.0.10-release/',
    data: utils.createRedirectResponse(hexo, 'blog/2015/12/16/introducing-aframe/')
  };
});

hexo.extend.generator.register('docs', function (locals) {
  return {
    path: 'docs/',
    // TODO: Redirect to http://docs.aframe.io/
    data: utils.createRedirectResponse(hexo, 'docs/guide/')
  };
});

hexo.extend.generator.register('examples.json', function (locals) {
  return {
    path: 'examples/index.json',
    data: JSON.stringify(locals.data.examples)
  };
});

hexo.extend.generator.register('examples', function (locals) {
  var self = this;
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

      var permalink = utils.urljoin('examples', section, example.slug, '/');
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
