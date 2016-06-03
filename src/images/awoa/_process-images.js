/*
  Usage: node _process-images.js my-1.gif my-2.gif my-3.gif

  - Converts and resizes PNG to JPG. Deletes the original PNG.
  - Resizes passed-in GIFs in half.
*/
var childProcess = require('child_process');

// PNG to JPG.
try {
  childProcess.execSync('mogrify -format jpg -resize 30% *.png');
  childProcess.execSync('rm *.png');
} catch (e) { }

// Resize GIFs.
process.argv.forEach(function resize (val, index) {
  if (index === 0 || index === 1) { return; }
  var valTemp = val + '-temp';
  childProcess.execSync('gifsicle --scale 0.5 -i ' + val + ' > ' + valTemp);
  childProcess.execSync('mv ' + valTemp + ' ' + val);
});
