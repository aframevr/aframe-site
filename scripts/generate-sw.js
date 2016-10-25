var path = require('path');
var swPrecache = require('sw-precache');
var rootDir = '../themes/aframe/source';

//Generate sw.js
swPrecache.write(path.join('sw.js'), {
  staticFileGlobs: [rootDir + '/{css,fonts,images,js}/**/*.{js,html,css,png,jpg,gif,svg,eot,otf,ttf,woff,woff2}'],
  stripPrefix: rootDir
});
