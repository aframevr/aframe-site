var fs = require('fs');
var glob = require('glob');

var multidep = require('../multidep');
var utils = require('../lib/utils');

var MASTER = 'master';

hexo.extend.generator.register('blog-redirects', function () {
  return expandRedirectObjs([
    ['blog/2015/12/16/0.0.10-release/', 'blog/introducing-aframe/'],
    ['blog/2015/12/16/introducing-aframe/', 'blog/introducing-aframe/'],
    ['blog/2016/03/31/aframe-v0.2.0/', 'blog/aframe-v0.2.0/']
  ]);
});

hexo.extend.generator.register('docs-redirects', function () {
  var redirectObjs = [getDocRootRedirectObjs(), getPreVersionedRedirectObjs()];
  redirectObjs.push([
    ['docs/', 'docs/' + hexo.config.aframe_version + '/guide/'],
    ['docs/guide/', 'docs/' + hexo.config.aframe_version + '/guide/'],
    // Pre-versioned 0.1.0 removed pages redirects.
    ['docs/core/templates.html', 'docs/0.1.0/templates.html'],
    ['docs/guide/entering-vr.html', 'docs/0.1.0/entering-vr.html'],
    // Pre-versioned 0.1.0 -> 0.2.0 redirects.
    ['docs/components/loader.html', 'docs/0.2.0/components/collada-model.html'],
    ['docs/core/animation.html', 'docs/0.2.0/core/animations.html'],
    ['docs/core/assets.html', 'docs/0.2.0/core/asset-management-system.html'],
    ['docs/core/mixin.html', 'docs/0.2.0/core/mixins.html'],
    ['docs/guide/cameras-and-lights.html', 'docs/0.2.0/guide/building-a-basic-scene.html'],
    ['docs/guide/installation.html', 'docs/0.2.0/guide/getting-started.html'],
    ['docs/guide/objects.html', 'docs/0.2.0/guide/building-a-basic-scene.html'],
    ['docs/guide/positioning.html', 'docs/0.2.0/guide/building-a-basic-scene.html#transforming-the-box'],
    ['docs/primitives/a-cube.html', 'docs/0.2.0/primitives/a-box.html'],
    ['docs/primitives/a-model.html', 'docs/0.2.0/primitives/a-collada-model.html']
  ]);

  // Flatten arrays since `redirectObjs` is an array of arrays of arrays. We just want a flat
  // array of [<from>, <to>]s.
  return expandRedirectObjs([].concat.apply([], redirectObjs));
});

/**
 * To enable more convenient data structure.
 * [fromPath, toPath] to {path: fromPath, data: redirect(hexo, toPath)}
 */
function expandRedirectObjs (redirectObjs) {
  return redirectObjs.map(function expand(redirectObj) {
    return {path: redirectObj[0], data: utils.createRedirectResponse(hexo, redirectObj[1])};
  });
}

/**
 * Redirects from '/docs/<version>/' to '/docs/<version>/guide/'.
 */
function getDocRootRedirectObjs () {
  var versions = multidep.versions.aframe.slice(0);
  versions.push(MASTER);
  return versions.map(function getRedirectObj (version) {
    return ['docs/' + version + '/', 'docs/' + version + '/guide/'];
  });
}

/**
 * Get documentation paths from before docs were versioned (started versioning at 0.3.0).
 * In order to create redirects from old path structure to new path structure.
 *
 * For example:
 *   Redirect from docs/guide/getting-started.html -> docs/0.2.0/guide/getting-started.html
 *
 * And do that for every page in 0.2.0.
 */
function getPreVersionedRedirectObjs () {
  var paths = glob.sync('.multidep/aframe-0.2.0/node_modules/aframe/docs/**/*.md');
  return paths.map(function getRedirectObj (path) {
    // `path` looks like `.multidep/aframe-0.2.0/node_modules/aframe/docs/<folder>/<file>.md`.
    // Pull out the last three paths and s/md/html (=> docs/<folder>/<file>.html).
    path = path.split('/').slice(-3).join('/').replace('.md', '.html');
    // Then create the redirect.
    return [path, path.replace('docs/', 'docs/0.2.0/')];
  });
}
