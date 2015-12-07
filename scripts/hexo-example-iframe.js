/**
* hexo-example-iframe
* Copyright (c) 2015, Chris Van.
* Licensed under the MIT license.
*
* Syntax:
*   {% example-iframe [slug] %}
*   {% example-iframe [slug [width [height]]] %}
*/

hexo.extend.tag.register('example_iframe', function (args) {
  var config = hexo.config.example_iframe || {};
  config.width = config.width || '100%';
  config.height = config.height || '500';

  var baseUrl = config.base_url;
  if (baseUrl.substr(-1) !== '/') {
    baseUrl += '/';
  }

  var slug = args[0] || '';
  var width = args[1] || config.width;
  var height = args[2] || config.height;
  var scrolling = args[3] || config.scrolling;

  return '<iframe class="example__iframe" width="' + width + '" ' +
         'height="' + height + '" src="' + baseUrl + slug + '/" ' +
         'allowfullscreen="yes" scrolling="' + scrolling + '"></iframe>';
});
