/* global $, getJSON, settings, singlePage */
(function () {

var path = window.location.pathname;
var pathWithSlash = forceTrailingSlash(path);

var a = document.createElement('a');
function parseUrl (url) {
  a.href = url;
  return a;
}

function stripTrailingSlash (url) {
  return url.replace(/\/+$/, '');
}

function forceTrailingSlash (str) {
  if (str.substr(-1) !== '/') {
    str += '/';
  }
  return str;
}

var currentExample;
var examplesSubnav = document.querySelector('#examplesSubnav');
var examplesRoutes = {};

function getUrlParameter (name) {
  // Simple function because `URLSearchParams` isn't supported everywhere yet.
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

getJSON(settings.siteBaseUrl + '/examples/index.json', function (err, examples) {
  if (err) {
    console.error('Could not fetch examples\n%s', err);
    return;
  }

  fetchExamples(examples);
  init();
});

function fetchExamples (examples) {
  if (examplesSubnav) {
    examples.showcase.forEach(function (item, idx) {
      item.getLi = function () {
        return $('.example-item[data-slug="' + this.slug + '"]');
      };
      item.getA = function () {
        return $('.example-item[data-slug="' + this.slug + '"] a');
      };
      item.isCurrent = item.example_url === pathWithSlash;
      if (item.isCurrent) {
        currentExample = item;
      }
      examplesRoutes[item.example_url] = item;
    });
  }

  examplesRoutes.__default__ = examples.showcase[0];
  examplesRoutes.__home__ = examples.home;

  if (!currentExample) {
    currentExample = settings.home ? examplesRoutes.__home__ : examplesRoutes.__default__;
  }
}

function init () {
  var body = document.body;

  var currentLink;

  // Trigger `:active` styles when we "click" on examples, previous/next links.
  var SHOW_ACTIVE_STYLES_ON_CLICK = true;

  function getTitle (title) {
    return settings.title.replace('{title}', title);
  }

  function clickEl (el) {
    if (!el) { return; }
    if (SHOW_ACTIVE_STYLES_ON_CLICK) { el.classList.add('click'); }
    el.click();
  }

  function clickNavLink (link) {
    currentLink = getCurrentNavLink();
    if (!currentLink || currentLink === link) { return; }
    currentLink.classList.remove('current');
    currentLink.classList.remove('click');
    clickEl(link);
    currentLink = link;
    currentLink.classList.add('current');
    currentLink.classList.remove('click');
  }

  function getCurrentNavLink () {
    return document.querySelector('.examples-subnav .subnav-link.current');
  }

  function getNavLinks () {
    return document.querySelectorAll('.examples-subnav .subnav-link');
  }

  function getDestNavLink (left) {
    currentLink = getCurrentNavLink();
    var navLinks = getNavLinks();
    var navLinksLength = navLinks.length;

    var idx = currentLink ? parseInt(currentLink.parentNode.getAttribute('data-idx'), 10) : -1;

    var offset = left ? -1 : 1;

    var nextIdx = idx + offset;
    if (nextIdx < 0) { nextIdx = navLinksLength - 1; }

    var destLink = navLinks[nextIdx % navLinksLength];

    return destLink;
  }

  function getPrevNavLink () {
    return getDestNavLink(true);
  }

  function getNextNavLink () {
    return getDestNavLink(false);
  }

  body.addEventListener('keyup', function (e) {
    var left = e.keyCode === 37;
    var right = e.keyCode === 39;
    if (!left && !right) { return; }

    currentLink = getCurrentNavLink();

    if (!currentLink) {
      // TODO: Swap out when SPA is engaged.
      window.location.href = settings.siteBaseUrl + '/examples/';
      return;
    }

    var destLink = left ? getPrevNavLink() : getNextNavLink();
    clickNavLink(destLink);
  });

  var examplePrev = document.querySelector('#examplePrev');
  var exampleNext = document.querySelector('#exampleNext');
  examplePrev.addEventListener('click', function () {
    this.setAttribute('href', getPrevNavLink());
  });
  exampleNext.addEventListener('click', function () {
    this.setAttribute('href', getNextNavLink());
  });

  if (settings.isSpa) {
    var showPage = singlePage(function (href) {
      var hrefWithSlash = forceTrailingSlash(parseUrl(href).pathname);

      var exampleIframe = document.querySelector('#exampleIframe');
      if (exampleIframe) {
        if (!settings.isHome) {
          document.title = getTitle(currentExample.title);
          currentExample.getLi().classList.add('current');
          currentExample.getA().classList.add('current');
        }

        exampleIframe.setAttribute('src', currentExample.scene_url);

        var exampleViewsource = document.querySelector('#exampleViewsource');
        if (exampleViewsource) {
          exampleViewsource.setAttribute('href', currentExample.source_url);
        }
      }
    });

    body.addEventListener('spa-navigate', function (e) {
      var link = $('[data-spa-link][href="' + e.detail.path + '"]');
      if (link) {
        clickNavLink(link);
        showPage(e.detail.path);
      }
    });
  }
}

})();
