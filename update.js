var fs = require('fs');
var pkg = require('../aframe/package');

var version = pkg.version;
var configPath = '_config.yml';
var installPath = 'src/guide/installation.md';
var themeconfig = fs.readFileSync(configPath, 'utf-8');
var installation = fs.readFileSync(installPath, 'utf-8');

fs.writeFileSync(
  configPath,
  themeconfig.replace(/aframe_version: .*/, 'aframe_version: ' + version)
);

var sizes = {
  dev: 'aframe.js',
  min: 'aframe.min.js',
  gz: 'aframe.min.js.gz'
};

for (var file in sizes) {
  var filesize = fs.statSync('../aframe/dist/' + sizes[file], 'utf-8').size;
  sizes[file] = (filesize / 1024).toFixed(2);
}

fs.writeFileSync(
  installPath,
  installation
    .replace(/aframe_version: .*/, 'aframe_version: ' + version)
    .replace(/(\w+)_size:.*/g, function (m, p1) {
      return p1 + '_size: "' + sizes[p1] + '"';
    })
);
