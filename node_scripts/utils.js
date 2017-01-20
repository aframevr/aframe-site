var urllib = require('url');

module.exports.isUrl = function (url) {
  return url.indexOf('//') !== -1;
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
