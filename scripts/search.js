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
    // Set up index.
		searchIdx = lunr(function () {
			this.field('title', {boost:10});
			this.field('body');
			this.ref('href');
		});

    // For each group.
		res[group].forEach(function (post) {
      bodyText = lunrConfig.fulltext ? post.content : post.excerpt;

      // Add data to help indexing.
      searchIdx.add({
        title: post.title,
        body: bodyText || '',
        href: post.permalink
      });

      // Add data to store for displaying search results.
      store[post.permalink] = {
        title: post.title.replace('<', '&lt;'),
        desc: trimBody(bodyText)
      };
		});

    // Output.
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

/**
 * Trim body (HTML) for displaying concise search result descriptions.
 */
function trimBody (str) {
  str = str.trim().replace(/\n/gm, ' ');

  // Remove headers.
  str = str.replace(/<h..*?>.*?<\/h.>/gm, '');

  // Remove tables.
  str = str.replace(/<table.*?>.*?<\/table>/gm, '');

  // Remove figures (i.e., code blocks).
  str = str.replace(/<figure.*?>.*?<\/figure>/gm, '');

  // Remove HTML tags.
  str = str.replace(/<(?:.|\n)*?>/gm, '');

  return str.substring(0, 140);
}
