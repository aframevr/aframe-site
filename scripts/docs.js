var cpdir = require('ncp').ncp;
var fs = require('fs');
var request = require('request');
var unzip = require('unzip');

var BRANCH = process.env.AFRAME_BRANCH || 'master';
var TARGET = process.env.AFRAME_TARGET || BRANCH;
var TMP = 'tmp';
var url = 'https://github.com/aframevr/aframe/archive/' + BRANCH + '.zip';

console.log('Fetching: ' + url);
request.get({url: url, encoding: null}, function (err, res, body) {
  if (err) { throw err; }

  if (!fs.existsSync(TMP)){
    fs.mkdirSync(TMP);
  }

  fs.writeFileSync('tmp/aframe.zip', body);
  fs.createReadStream('tmp/aframe.zip').pipe(unzip.Extract({ path: 'tmp/' }));
  cpdir('tmp/aframe-' + BRANCH + '/docs', 'src/docs/' + TARGET, function (err) {
    if (err) { throw err; }
    console.log(BRANCH + ' docs successfully slurped to src/docs/' + TARGET);
  });
});
