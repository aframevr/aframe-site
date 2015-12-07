var utils = require('../lib/utils');

hexo.extend.generator.register('post', function (locals) {
  var self = this;
  if (!locals.data.examples) { return; }
  var routes = [];
  Object.keys(locals.data.examples).map(function (sectionSlug) {
    var section = locals.data.examples[sectionSlug];
    section.examples.forEach(function (example) {
      var permalink = utils.urljoin('examples', sectionSlug, example.slug, '/');
      example.section = sectionSlug;
      example.url = permalink;
      routes.push({
        path: permalink,
        data: example,
        layout: 'example'
      });
      if (permalink === self.config.examples.first_example_url) {
        routes.push({
          path: 'examples/',
          data: example,
          layout: 'example'
        });
      }
    });
  });
  return routes;
});
