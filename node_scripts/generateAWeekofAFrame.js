/**
 * Does final work on an A Week of A-Frame post.
 *
 * Expand Twitter links to Twitter embeds.
 * Expand Twitter usernames to Twitter links.
 * Expand GitHub usernames to GitHub links.
 *
 * Modifies in-place so make a back up of the file just in case.
 */
const fs = require('fs');
const req = require('superagent-promise')(require('superagent'), Promise);

// Read file.
const fileContent = fs.readFileSync(process.argv[2], 'utf-8');
replaceTwitterEmbeds(fileContent).then(content => {
  content = replaceTwitterUsernames(content);
  content = replaceGithubUsernames(content);
  fs.writeFileSync(process.argv[2], content);
});

/**
 * Given a file with Twitter URLs, convert them all to embeds.
 * @param {string} content
 * @returns {Promise} that resolves {string} content.
 */
function replaceTwitterEmbeds (content) {
  const twitterRegex = /https:\/\/twitter.com\/.+\/status\/\d+/g;
  const requests = [];
  let match = twitterRegex.exec(content);
  let twitterScriptIncluded = false;
  while (match !== null) {
    let request = (function (url) {
      console.log('Processing', match[0]);
      return req
        .get(`https://publish.twitter.com/oembed?url=${match[0]}`)
        .then(res => {
          content = content.replace(res.body.url,
                                    res.body.html.replace(/<script.*<\/script>/, ''));
          content = content.replace(/__/g, '\__');
          content = content.replace(/_/g, '\_');
        }).catch(err => {
          throw new Error(`Not found: ${url}.`);
        });
    })(match[0]);
    requests.push(request);
    match = twitterRegex.exec(content);
  }
  return new Promise(resolve => {
    Promise.all(requests).then(() => { resolve(content); });
  });
}

/**
 * Given a file with Twitter usernames in format `twitter@foo`, convert to links.
 * @param {string} content
 * @returns content
 */
function replaceTwitterUsernames (content) {
  const userRegex = /twitter(@.*?)([^\w\d]*\s)/g;
  let match = userRegex.exec(content);
  while (match !== null) {
    content = content.replace(
      match[0],
      `[${match[1]}](https://twitter.com/${match[1]})${match[2]}`);
    match = userRegex.exec(content);
  }
  return content;
}

/**
 * Given a file with GitHub usernames in format `github@foo`, convert to links.
 * @param {string} content
 * @returns content
 */
function replaceGithubUsernames (content) {
  const userRegex = /github(@.*?)([^\w\d]*\s)/g;
  let match = userRegex.exec(content);
  while (match !== null) {
    content = content.replace(
      match[0],
      `[${match[1]}](https://github.com/${match[1]})${match[2]}`);
    match = userRegex.exec(content);
  }
  return content;
}
