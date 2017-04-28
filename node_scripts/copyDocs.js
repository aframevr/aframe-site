var copy = require('recursive-copy');
var fs = require('fs');
var rmdir = require('rmdir');

var specPath = process.argv[2];

// Read the .json file that specifies the aframe versions
// of the docs that will be copied to src/docs/X.Y.Z/
fs.readFile(specPath, 'utf8', function (err, data) {
  if (err) { return console.log(err); }

  // Iterate over the doc versions
  const versions = JSON.parse(data).versions.aframe;
  for (let i = 0; i < versions.length; i++) {
    let version = versions[i];

    if (Array.isArray(version)) { version = version[1]; }

    // v0.1.0 does not have docs in the repo.
    if (version === '0.1.0') { continue; }

    // Get source and destinations for the copy.
    let source = '.multidep/aframe-' + version + '/node_modules/aframe/docs';
    let dest = 'src/docs/' + version;
    // Clear the destination in case files were moved or deleted.
    rmdir(dest, function (err, dirs, files) {
      if (err) { console.error(err); }
      console.log('Deleted', dest);
      copy(source, dest, {overwrite: true}, function (error, results) {
        if (error) {
          console.error('Copy failed: ' + error);
        } else {
          console.info(`Copied ${results.length} documentation pages to ${dest}`);
        }
      });
    });
  }
});

// Copy master.
source = 'node_modules/aframe/docs';
dest = 'src/docs/master';
// Clear the destination in case files were moved or deleted.
rmdir(dest, function (err) {
  if (err) { console.error(err); }
  console.log('Deleted', dest);
  copy(source, dest, {overwrite: true}, function (error, results) {
    if (error) {
      console.error('Copy failed: ' + error);
    } else {
      console.info(`Copied ${results.length} documentation pages to ${dest}`);
    }
  });
});
