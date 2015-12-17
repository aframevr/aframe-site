(function () {

  /**
   * Wraps `querySelector` à la jQuery's `$`.
   *
   * @param {String|Element} sel CSS selector to match an element.
   * @param {Element=} parent Parent from which to query.
   * @returns {Element} Element matched by selector.
   */
  var $ = function (sel, parent) {
    var el = sel;
    if (sel && typeof sel === 'string') {
      el = (parent || document).querySelector(sel);
    }
    return el;
  };

  /**
   * Wraps `querySelectorAll` à la jQuery's `$`.
   *
   * @param {String|Element} sel CSS selector to match elements.
   * @param {Element=} parent Parent from which to query.
   * @returns {Array} Array of elements matched by selector.
   */
  var $$ = function (sel, parent) {
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

  var body = document.body;

  // EXAMPLES.

  // To customise the base URL for the <iframe>'d examples, do this in the Console:
  //
  //   localStorage.examples_base_url = 'http://localhost:9000/examples/'
  //
  // To revert back to normal:
  //
  //   delete localStorage.examples_base_url
  //
  // And be sure to refresh the page :)
  var customExamplesBaseUrl;
  try {
    customExamplesBaseUrl = window.localStorage.examples_base_url;
  } catch (e) {
  }
  var isOnline = navigator.onLine;
  if (!isOnline) {
    console.warn('You appear to be offline. ' +
      'You can point the examples at your local server though:\n' +
      "localStorage.examples_base_url = 'http://localhost:9000/examples/'");
  }
  if (customExamplesBaseUrl) {
    // When you're on the airplane and Gogo Inflight Internet or Bongo Wireless
    // have got you down, you can load the examples from your local `aframe`
    // dev server, for example.
    $$('iframe.example__iframe').forEach(function (iframe) {
      var iframePath = iframe.getAttribute('data-path');
      if (iframePath.indexOf('//') !== -1) { return; }  // Ignore external URLs.
      iframe.setAttribute('src', customExamplesBaseUrl + iframePath);
    });
  }

  // Trigger `:active` styles when we "click" on examples, previous/next links.
  var SHOW_ACTIVE_STYLES_ON_CLICK = true;

  function clickEl (el) {
    if (!el) { return; }
    if (SHOW_ACTIVE_STYLES_ON_CLICK && el.classList) { el.classList.add('click'); }
    el.click();
  }

  function getCurrentNavLink () {
    return document.querySelector('.examples-subnav .subnav-link.current');
  }

  function getNavLinks () {
    return document.querySelectorAll('.examples-subnav .subnav-link');
  }

  var navLinks = getNavLinks();
  if (body.getAttribute('data-page-layout') === 'docs') {
    var guideLinkLeft = $('.guide-link-left');
    var guideLinkRight = $('.guide-link-right');

    body.addEventListener('keyup', function (e) {
      if (document.activeElement !== body) { return; }

      var left = e.keyCode === 37;
      if (left) {
        if (guideLinkLeft) { clickEl(guideLinkLeft); }
        return;
      }

      var right = e.keyCode === 39;
      if (right) {
        if (guideLinkRight) { clickEl(guideLinkRight); }
        return;
      }
    });
  }


  var navLinks = getNavLinks();
  if (navLinks.length) {
    body.addEventListener('keyup', function (e) {
      if (document.activeElement !== body) { return; }

      var left = e.keyCode === 37;
      var right = e.keyCode === 39;
      // var up = e.keyCode === 38;
      // var down = e.keyCode === 40;
      if (!left && !right) { return; }

      navLinks = getNavLinks();
      if (!navLinks) { return; }

      var currentLink = getCurrentNavLink();
      if (!currentLink) {
        window.location.href = 'examples/';
        return;
      }

      var destIdx;
      var clicked = false;
      if (left) {
        destIdx = currentLink.closest('[data-idx]').getAttribute('data-previous-idx');
        if ('examplePrev' in window) {
          clickEl(examplePrev);
          clicked = true;
        }
      }
      if (right) {
        destIdx = currentLink.closest('[data-idx]').getAttribute('data-next-idx');
        if ('exampleNext' in window) {
          clickEl(exampleNext);
          clicked = true;
        }
      }

      if (destIdx) {
        currentLink.classList.remove('current');
      }

      var destLink = navLinks[destIdx];
      if (destLink) {
        clickEl(destLink);
        if (!clicked) {
          destLink.click();
        }
      }
    });
  }

  // DOCS.
  var anchorHeadingsSelector = 'h2[id], h3[id], h4[id], h5[id], h6[id]';

  var contentDocs = $('.content--docs');
  if (contentDocs) {
    contentDocs.addEventListener('click', function (e) {
      var el = e.target;
      if (el.matches && el.matches(anchorHeadingsSelector)) {
        window.location.hash = '#' + el.id;
      }
    });
  }

})();
