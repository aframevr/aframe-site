var urllib = require('url');

var normalize = function (str) {
  return str.replace(/[\/]+/g, '/')
            .replace(/\/\?/g, '?')
            .replace(/\/\#/g, '#')
            .replace(/\:\//g, '://');
};

module.exports.urljoin = function () {
  var parts = Array.prototype.slice.call(arguments, 0);
  var joined = parts.map(stripTrailingSlash).join('/');
  return normalize(joined);
};

module.exports.isUrl = function (url) {
  return url.indexOf('//') !== -1;
};

var stripTrailingSlash = module.exports.stripTrailingSlash = function (url) {
  return url.replace(/\/+$/, '');
};

module.exports.createRedirectResponse = function (hexo, path) {
  path = urllib.parse(path).protocol ? path : hexo.config.root + hexo.route.format(path);
  path = path.replace(/index\.html$/, '');
  return [
    '<!DOCTYPE html>',
    '<html>',
      '<head>',
        '<meta charset="utf-8">',
        '<title>Redirecting...</title>',
        '<link rel="canonical" href="' + path + '">',
        '<meta http-equiv="refresh" content="0; url=' + path + '">',
      '</head>',
    '</html>'
  ].join('');
};
