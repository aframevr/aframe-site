var fs = require('fs');
var yaml = require('js-yaml');

var pkg = require('../../package.json');

/**
 * Parse example metadata defined as AFRAME_SITE.yml in each GitHub repository that is
 * installed through NPM.
 *
 * @returns {object}
 */
hexo.extend.helper.register('examples_get_metadata', function (npmName) {
  var ymlContents = fs.readFileSync('node_modules/' + npmName + '/AFRAME_SITE.yml', 'utf-8');
  return yaml.safeLoad(ymlContents);
});

/**
 * Get JS path.
 * If JS file is not local to project, then don't do anything.
 * Else, since boilerplates are published on NPM, use npmcdn.com to fetch local project files.
 *
 * @returns {string} Path to JS file, whether local or online.
 */
hexo.extend.helper.register('examples_get_js_path', function (npmName, jsPath) {
  // Is hosted somewhere, no need to do anything.
  if (jsPath.indexOf('http') !== -1) { return jsPath; }

  // Build NPM CDN url.
  var npmVersion = pkg.devDependencies[npmName];
  return 'https://npmcdn.com/' + npmName + '@' + npmVersion + '/' + jsPath;
});

/**
 * Read HTML file. Remove everything except the <a-scene> block.
 */
hexo.extend.helper.register('examples_get_source', function (npmName) {
  var source = fs.readFileSync('node_modules/' + npmName + '/index.html', 'utf-8');

  // Remove everything before <a-scene>.
  var sceneOpenIndex = source.indexOf('<a-scene');
  source = source.replace(source.slice(0, sceneOpenIndex), '');

  // Remove everything after </a-scene> (but keep </a-scene>).
  var sceneCloseIndex = source.indexOf('</a-scene>') + '</a-scene>'.length;
  source = source.replace(source.slice(sceneCloseIndex, source.length - 1), '');

  // Fix indents left from removing <html> and <body> (i.e., shift back 4 spaces).
  source = source.replace(/\n    /g, '\n');

  // Remove trailing newline.
  source = source.replace(/\n$/g, '');

  return source;
});
