var utils = require('../lib/utils');

hexo.extend.helper.register('github_file_url', function (path) {
  return this.config.github_url + '/blob/master/' + path;
});

hexo.extend.filter.register('urljoin', utils.urljoin);
