var fs = require('fs');
var lunr = require('lunr');
var moment = require('moment');
var pathFn = require('path');

module.exports = function lunrSearchGenerator (locals) {
  var lunrConfig = this.config.lunr;
  var field = (lunrConfig.field || '').trim();
  var lunrPath = lunrConfig.path;
  var posts;
  var items;
  var res = {all: []};
  var year1;

  items = locals.pages.data.filter(function (page) {
    return page.layout === 'docs';
  });

	// Grouping.
	items.forEach(function (post) {
    var docVersion = post.path.split('/')[1];
    res[docVersion] = res[docVersion] || [];
    res[docVersion].push(post);
		res.all.push(post);
	});

	// Indexing.
	var finalData = [];
  var searchIdx;
  var store = {};
  var tags;
  var cates;
  var bodyText;

	for (var group in res) {
		searchIdx = lunr(function () {
			this.field('title', {boost:10});
			this.field('body');
			this.field('desc');
			this.ref('href');
		});

		res[group].forEach(function (post) {
      tags = [];
      cates = [];
      bodyText = lunrConfig.fulltext ? post.content : post.excerpt;

      searchIdx.add({
        title: post.title,
        desc: post.subtitle || '',
        body: bodyText || '',
        href: post.permalink
      });

      store[post.permalink] = {
        url: post.permalink,
        title: post.title,
        cover: post.cover,
        desc: post.subtitle || post.excerpt || ''
      };
		});

		finalData.push({
			path: pathFn.join(lunrPath, group + '.json'),
			data: JSON.stringify({
        index: searchIdx.toJSON(),
        store: store
			})
		});

    store = {};
	}

	return finalData;
};
