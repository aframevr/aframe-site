/* global define, module, settings, showPage */
(function () {

/* Adapted from https://github.com/substack/single-page/ */

// Hijack clicks so we can handle the navigation.
if (settings.isSpa && window.history && window.history.pushState) {
  document.body.addEventListener('click', function (e) {
    var isSpaLink = e.target.matches('[data-spa-link]');
    var spaLink = isSpaLink ? e.target : e.target.closest('[data-spa-link]');
    if (!isSpaLink || e.metaKey || e.ctrlKey || e.shiftKey) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    document.body.dispatchEvent(new CustomEvent('spa-navigate', {
      detail: {path: spaLink.getAttribute('href')},
      bubbles: true
    }));
  }, false);
}

var singlePage = function (cb, opts) {
  var page = new Page(cb, opts);
  window.addEventListener('popstate', onpopstate);

  function onpopstate () {
    var href = getPath();
    page.show(href);
  }
  setTimeout(onpopstate);

  var fn = function (href) { return page.show(href); };
  fn.push = function (href) { return page.push(href); };
  fn.show = function (href) { return page.show(href); };
  return fn;
};

function Page (cb, opts) {
  if (!opts) opts = {};
  this.current = null;
  this.hasPushState = opts.pushState !== undefined ?
    opts.pushState :
    window.history && window.history.pushState;
  this.scroll = opts.saveScroll !== false ? {} : null;
  this.cb = cb;
}

Page.prototype.show = function (href) {
  href = href.replace(/^\/+/, '/');

  if (this.current === href) { return; }
  this.saveScroll(href);
  this.current = href;

  var scroll = this.scroll[href];
  this.cb(href, {
    scrollX : scroll && scroll[0] || 0,
    scrollY : scroll && scroll[1] || 0
  });

  this.pushHref(href);
};

Page.prototype.saveScroll = function (href) {
  if (this.scroll && this.current) {
    this.scroll[this.current] = [window.scrollX, window.scrollY];
  }
};

Page.prototype.push = function (href) {
  href = href.replace(/^\/+/, '/');
  this.saveScroll(href);
  this.pushHref(href);
};

Page.prototype.pushHref = function (href) {
  this.current = href;
  var mismatched = getPath() !== href;
  if (mismatched) window.history.pushState(null, '', href);
};

function getPath () {
  return window.location.pathname +
    (window.location.search || '') +
    (window.location.hash || '');
}

if (typeof define === 'function' && define.amd) {
  define('single-page', singlePage);
} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
  module.exports = singlePage;
} else if (window) {
  window.singlePage = singlePage;
}

})();
