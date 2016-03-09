(function () {

if ('FastClick' in window) {
  document.addEventListener('DOMContentLoaded', function () {
    window.FastClick.attach(document.body);
  });
}

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

window.getJSON = function (opts, cb) {
  if (typeof opts === 'string') {
    opts = {url: opts};
  } else {
    opts = opts || {};
  }
  var req = new XMLHttpRequest();
  req.open('get', opts.url);
  req.setRequestHeader('accept', 'application/json');
  req.addEventListener('load', function () {
    var err = null;
    var response = req.response;

    // It could be a successful response but not an OK one (e.g., 3xx, 4xx).
    if (req.status === 200) {
      // `responseType` is not supported in IE <11.
      try {
        response = JSON.parse(response);
      } catch (e) {
        err = new Error('Could not parse response as JSON');
      }
    } else {
      err = new Error(req.statusText);
    }

    cb(err, response);
  });
  req.addEventListener('error', function () {
    cb(new Error('Network Error'));
  });
  req.send(opts.data);
  return req;
};

})();
