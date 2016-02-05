(function () {

if ('FastClick' in window) {
  document.addEventListener('DOMContentLoaded', function () {
    window.FastClick.attach(document.body);
  });
}

function initGoogleAnalytics (id) {
  (function(c, v, a, n) {
    c.GoogleAnalyticsObject = n;

    c[n] = c[n] || function () {
      (c[n].q = c[n].q || []).push(arguments);
    }, c[n].l = 1 * new Date();

    var s = v.createElement('script');
    s.async = true;
    s.src = a;

    var m = v.getElementsByTagName('script')[0];
    m.parentNode.insertBefore(s, m);
  })(window, document, 'https://www.google-analytics.com/analytics.js', 'ga');
  window.ga('create', id, 'auto');
  window.ga('send', 'pageview');
}

initGoogleAnalytics('UA-24056643-4');

/**
 * Wraps `querySelector` à la jQuery's `$`.
 *
 * @param {String|Element} sel CSS selector to match an element.
 * @param {Element=} parent Parent from which to query.
 * @returns {Element} Element matched by selector.
 */
window.$ = function (sel, parent) {
  var el = sel;
  if (sel && typeof sel === 'string') {
    el = (parent || document).querySelector(sel);
  }
  return el;
};

/**
 * Wraps `querySelectorAll` Ã  la jQuery's `$`.
 *
 * @param {String|Element} sel CSS selector to match elements.
 * @param {Element=} parent Parent from which to query.
 * @returns {Array} Array of elements matched by selector.
 */
window.$$ = function (sel, parent) {
  if (Array.isArray(sel)) { return sel; }
  var els = sel;
  if (sel && typeof sel === 'string') {
    els = (parent || document).querySelectorAll(sel);
  }
  return toArray(els);
};

/**
 * Turns an array-like object into an array.
 *
 * @param {String|Element} obj CSS selector to match elements.
 * @param {Array|NamedNodeMap|NodeList|HTMLCollection} arr An array-like object.
 * @returns {Array} Array of elements matched by selector.
 */
var toArray = function (obj) {
  if (Array.isArray(obj)) { return obj; }
  if (typeof obj === 'object' && typeof obj.length === 'number') {
    return Array.prototype.slice.call(obj);
  }
  return [obj];
};

})();
