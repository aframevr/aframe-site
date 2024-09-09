var urllib = require('url');

/**
 * After generating an HTML page from a Markdown file,
 * fix the `.md` URLs so they point instead to their
 * respective `.html` URLs.
 */
function fixMarkdownLink (url) {
  var obj = urllib.parse(url);
  if (!obj.pathname || obj.pathname[0] === '/') {
    // Do not rewrite absolute URLs.
    return url;
  }
  obj.pathname = obj.pathname.replace(/\.md$/, '.html')
                             .replace('/index.html', '/');
  return urllib.format(obj);
}

/**
 * Replace URLs for local dev when serving aframevr/aframe repo locally.
 */
function convertProdToDevUrls (str) {
  if (typeof str !== 'string') {
    return str;
  }
  // Careful. Order does matter here.
  if (this.config.aframe_lib.prod_examples_url) {
    str = str.replaceAll(this.config.aframe_lib.prod_examples_url, this.config.aframe_lib.examples_url);
  }
  if (this.config.aframe_lib.prod_home_url) {
    str = str.replaceAll(this.config.aframe_lib.prod_home_url, this.config.aframe_lib.home_url);
  }
  return str;
}

hexo.extend.filter.register('after_post_render', function (data) {
  data.content = convertProdToDevUrls.bind(this)(data.content);

  if (data.source && data.source.endsWith('.md')) {
    data.content = data.content.replace(/href="([^"]+)"/g, function (origStr, p1) {
      return 'href="' + fixMarkdownLink(p1) + '"';
    });
  }

  return data;
});
