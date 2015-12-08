var normalize = function (str) {
  return str.replace(/[\/]+/g, '/')
            .replace(/\/\?/g, '?')
            .replace(/\/\#/g, '#')
            .replace(/\:\//g, '://');
};

module.exports.urljoin = function () {
  var joined = Array.prototype.slice.call(arguments, 0).join('/');
  return normalize(joined);
};

module.exports.isUrl = function (url) {
  return url.indexOf('//') !== -1;
};
