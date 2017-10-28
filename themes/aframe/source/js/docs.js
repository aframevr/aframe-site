/* global $ */
(function () {

var anchorHeadingsSelector = 'h2[id], h3[id], h4[id], h5[id], h6[id]';

var content = $('.content');

if (content) {
  if (window.location.hash) {
    window.location.hash = window.location.hash.toLowerCase();
  }

  content.addEventListener('click', function (e) {
    var el = e.target;
    if (el.matches && el.matches(anchorHeadingsSelector)) {
      window.location.hash = '#' + el.id;
      ga('send', 'pageview', {
        page: location.pathname + location.search  + location.hash
      });
    }
  });

  // NOTE: Hack because variables doesn't get interpolated correctly in Markdown code blocks.
  // This is for `/docs/<version>/guide/getting-started.html`
  if (document.querySelector('#builds')) {
    var versionEls = document.querySelectorAll('.highlight .code .string');
    for (var i = 0; i < versionEls.length; ++i) {
      versionEls[i].textContent = versionEls[i].textContent.replace('\{\{ version \}\}', settings.docsVersion);
    }
  }
  document.getElementById('cdn-link').addEventListener('click', function copyToClipboard(e) {
    var t = e.target;
    var tLabel = document.getElementById('cdn-link-label');
    t.select();
    t.setSelectionRange(0, t.value.length);
    try {
      document.execCommand('copy');
      tLabel.classList.add('cdn-link--copied');
      setTimeout(function() {
        tLabel.classList.remove('cdn-link--copied');
      }, 2000);
    } catch (err) {
      tLabel.classList.add('cdn-link--copy-error');
      setTimeout(function() {
        tLabel.classList.remove('cdn-link--copy-error');
      }, 2000);
    }
  });
}

})();
