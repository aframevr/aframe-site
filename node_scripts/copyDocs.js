'use strict'

var copy = require('recursive-copy');
var fs = require('fs');
var specPath = process.argv[2];

// Reads the .json file that specifies the aframe versions
// of the docs that will be copied to src/docs/X.Y.Z/
fs.readFile(specPath, 'utf8', function (err, data) {
  //var versions = JSON.parse(data).versions.aframe;
  var source;
  var dest;
  var version;
  if (err) { return console.log(err); }
  // Iterates over the doc versions
  for (var i = 0; i < versions.length; i++) {
    version = versions[i];
    if (Array.isArray(version)) { version = version[1]; }
    // version 0.1.0 does not have docs in the repo
    if (version === '0.1.0') { continue; }
    // Source and destinations for the copy
    source = '.multidep/aframe-' + version + '/node_modules/aframe/docs';
    dest = 'src/docs/' + version;
    copy(source, dest, {overwrite: true}, function(error, results) {
      if (error) {
          console.error('Copy failed: ' + error);
      } else {
          console.info('Copied ' + results.length + ' doc files');
      }
    });
  }
});