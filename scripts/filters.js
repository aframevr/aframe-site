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
    str = str.replace(new RegExp(this.config.aframe_lib.prod_examples_url, 'gi'),
                      this.config.aframe_lib.examples_url);
  }
  if (this.config.aframe_lib.prod_home_url) {
    str = str.replace(new RegExp(this.config.aframe_lib.prod_home_url, 'gi'),
                      this.config.aframe_lib.home_url);
  }
  return str;
}

hexo.extend.filter.register('after_render:json', function (obj, data) {
  var self = this;
  return JSON.parse(JSON.stringify(obj), function (key, val) {
    return convertProdToDevUrls.bind(self)(val);
  });
});

hexo.extend.filter.register('before_post_render', function (data) {
  // On the server, <!--toc--> was getting stripped during the render. Replace it
  // with a dummy <div>, which we'll later restore to <!--toc-->.
  data.content = data.content.replace('<!--toc-->', '<div id="toc"></div>');
  return data;
});

hexo.extend.filter.register('after_render:html', function (str, data) {
  str = convertProdToDevUrls.bind(this)(str);

  if (data.path && data.path.substr(-3) === '.md') {
    str = str.replace(/href="([^"]+)"/g, function (origStr, p1) {
      return 'href="' + fixMarkdownLink(p1) + '"';
    });
  }

  // Restore Table of Contents marker.
  str = str.replace('<div id="toc"></div>', '<!--toc-->');
  return str;
});
