var utils = require('../lib/utils');

hexo.extend.helper.register('github_file', function (path) {
  return this.config.github_url + '/blob/master/' + path;
});

hexo.extend.filter.register('urljoin', utils.urljoin);
