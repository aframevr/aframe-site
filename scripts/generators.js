var utils = require('../lib/utils');

hexo.extend.generator.register('post', function (locals) {
  var self = this;
  if (!locals.data.examples) { return; }
  var routes = [];
  function addRoute (path, data) {
    routes.push({
      path: path,
      data: data,
      layout: 'example'
    });
  }
  var examples = {};
  Object.keys(locals.data.examples).map(function (sectionSlug) {
    var section = locals.data.examples[sectionSlug];
    section.examples.forEach(function (example) {
      var permalink = utils.urljoin('examples', sectionSlug, example.slug, '/');
      example.type = 'examples';
      example.section = sectionSlug;
      example.url = permalink;
      addRoute(permalink, example);
      examples[permalink] = example;
      if (!self.config.examples) { return; }
      if (permalink === self.config.examples.first_example_url) {
        addRoute('examples/', example);
      }
      if (permalink === self.config.examples.homepage_example_url) {
        addRoute('/', example);
      }
    });
  });
  hexo.locals.set('examples_by_urls', function () {
    return examples;
  });
  return routes;
});
