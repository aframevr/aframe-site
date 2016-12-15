// Given a file with Twitter URLs, convert them all to embeds.
var fs = require('fs');
var req = require('superagent-promise')(require('superagent'), Promise);

var twitterRe = /https:\/\/twitter.com\/.+\/status\/\d+/g;

var content = fs.readFileSync(process.argv[2], 'utf-8');
var match = twitterRe.exec(content);
var requests = [];
var twitterScriptIncluded = false;
while (match !== null) {
  var request = req
    .get(`https://publish.twitter.com/oembed?url=${match[0]}`)
    .then(function (res) {
      content = content.replace(res.body.url,
                                res.body.html.replace(/<script.*<\/script>/, ''));
    });
  requests.push(request);

  match = twitterRe.exec(content);
}

Promise.all(requests).then(function () {
  fs.writeFileSync(process.argv[2], content);
}, function (err) {
  console.log(err);
});
