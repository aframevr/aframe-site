var path = require('path');
var swPrecache = require('sw-precache');
var __dirname = 'themes/aframe/source';

swPrecache.write(path.join('scripts','sw.js'), {
  staticFileGlobs: [__dirname + '/{css,fonts,images,js}/**/*.{js,html,css,png,jpg,gif,svg,eot,otf,ttf,woff,woff2}'],
  stripPrefix: __dirname
});