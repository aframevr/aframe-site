var fs = require('fs');
var glob = require('glob');
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
    ['docs/components/loader.html', 'docs/components/collada-model.html'],
    ['docs/core/animation.html', 'docs/core/animations.html'],
    ['docs/core/assets.html', 'docs/core/asset-management-system.html'],
    ['docs/core/mixin.html', 'docs/core/mixins.html'],
    ['docs/core/templates.html', 'https://github.com/ngokevin/aframe-template-component'],
    ['docs/guide/cameras-and-lights.html', 'docs/guide/building-a-basic-scene.html'],
    ['docs/guide/entering-vr.html', 'http://mozvr.com/#start'],
    ['docs/guide/installation.html', 'docs/guide/getting-started.html'],
    ['docs/guide/objects.html', 'docs/guide/building-a-basic-scene.html'],
    ['docs/guide/positioning.html', 'docs/guide/building-a-basic-scene.html#Transforming-the-Box'],
    ['docs/primitives/a-cube.html', 'docs/primitives/a-box.html'],
    ['docs/primitives/a-model.html', 'docs/primitives/a-collada-model.html']
  ]);

  // Merge.
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
  var versions = JSON.parse(fs.readFileSync('multidep.json')).versions.aframe;
  versions.push(MASTER);
  return versions.map(function getRedirectObj (version) {
    return ['docs/' + version + '/', 'docs/' + version + '/guide/'];
  });
}

/**
 * Get documentation paths from before docs were versioned (started versioning at 0.3.0).
 * In order to create redirects from old path structure to new path structure.
 */
function getPreVersionedRedirectObjs () {
  var paths = glob.sync('multidep/aframe-0.2.0/node_modules/aframe/docs/**/*.md');
  return paths.map(function getRedirectObj (path) {
    // Will look like `multidep/aframe-0.2.0/node_modules/aframe/docs/<folder>/<file>.md`.
    path = path.split('/').slice(-3).join('/').replace('.md', '.html');
    return [path, path.replace('docs/', 'docs/0.2.0/')];
  });
}
