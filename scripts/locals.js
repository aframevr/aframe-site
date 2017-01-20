var urljoin = require('urljoin.js');

var utils = require('../node_scripts/utils');

var url_for = hexo.extend.helper.store.url_for.bind(hexo);

function exampleUrlFor (item) {
  return urljoin(url_for('examples'), item.section, item.slug) + '/';
}

var transforms = {};

transforms.examples = function (doc) {
  doc.showcase = doc.showcase.map(function (example) {
    if (!example.supports) {
      example.supports = {};
    }
    if (typeof example.supports.android === 'undefined') {
      example.supports.android = true;
    }
    if (typeof example.supports.ios === 'undefined') {
      example.supports.ios = true;
    }
    example.example_url = exampleUrlFor(example);
    return example;
  });
  return doc;
};

hexo.locals.set('data', function () {
  var obj = {};
  hexo.model('Data').forEach(function (doc) {
    obj[doc._id] = doc._id in transforms ? transforms[doc._id](doc.data) : doc.data;
  });
  return obj;
});
