var copy = require('recursive-copy');
var fs = require('fs');

var specPath = process.argv[2];

// Read the .json file that specifies the aframe versions
// of the docs that will be copied to src/docs/X.Y.Z/
fs.readFile(specPath, 'utf8', function (err, data) {
  var dest;
  var i;
  var source;
  var version;
  var versions;

  if (err) { return console.log(err); }

  // Iterate over the doc versions
  versions = JSON.parse(data).versions.aframe;
  for (i = 0; i < versions.length; i++) {
    version = versions[i];

    if (Array.isArray(version)) { version = version[1]; }

    // v0.1.0 does not have docs in the repo.
    if (version === '0.1.0') { continue; }

    // Get source and destinations for the copy.
    source = '.multidep/aframe-' + version + '/node_modules/aframe/docs';
    dest = 'src/docs/' + version;
    copy(source, dest, {overwrite: true}, function (error, results) {
      if (error) {
        console.error('Copy failed: ' + error);
      } else {
        console.info('Copied ' + results.length + ' doc files');
      }
    });
  }
});

// Copy master.
source = 'node_modules/aframe/docs';
dest = 'src/docs/master';
copy(source, dest, {overwrite: true}, function (error, results) {
  if (error) {
    console.error('Copy failed: ' + error);
  } else {
    console.info('Copied ' + results.length + ' doc files');
  }
});
