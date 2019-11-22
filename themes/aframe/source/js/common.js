(function () {
  initHelpers();
  initHeadingAnchors();
  initTableOfContents();
  initSidebarScrollState();
  initSubscribeForm();

  function initHeadingAnchors () {
    function anchorId (str) {
      return (str || '').replace(/[^-a-zA-Z0-9,&\s]+/g, '')
                        .replace(/-/g, '_')
                        .replace(/\s+/g, ' ')
                        .trim()
                        .replace(/\s/g, '_')
                        .trim()
                        .toLowerCase();
    }
    var anchorHeadingsSelector = [
      '.copy__wrap > table[id] tr th:first-child',
      '.copy__wrap > table tr[id] td:first-child'
    ].join(',');
    var tableIds = {};
    var rowIds = {};
    var content = $('.content');

    if (content) {
      var tablesEls = $$('.content .copy__wrap > table');
      tablesEls.forEach(function (tableEl, idx) {
        // Find the closest sibling section heading.
        var siblingEl = tableEl;
        var tableHeading = '';
        while (siblingEl) {
          siblingEl = siblingEl.previousElementSibling;
          if (siblingEl && siblingEl.nodeName === 'H2') {
            tableHeading = siblingEl.textContent;
            break;
          }
        }

        var tableId = anchorId(tableHeading);

        // If this `id` has already been used, append at `-{num}` (starting at `-2`).
        if (tableIds[tableId]) {
          tableId += ++tableIds[tableId];
        } else {
          tableIds[tableId] = 1;
        }

        tableEl.setAttribute('id', tableId);

        $$('tr', tableEl).forEach(function (trEl) {
          var td = trEl.querySelector('td');
          if (!td) { return; }

          var trId = anchorId(td.textContent);

          // If this `id` has already been used, append at `-{num}` (starting at `-2`).
          if (rowIds[trId]) {
            trId += '-' + (++rowIds[trId])
          } else {
            rowIds[trId] = 1;
          }

          trEl.setAttribute('id', tableId + '_' + trId);
        });
      });

      content.addEventListener('click', function (e) {
        var el = e.target;
        if (el.matches && el.matches(anchorHeadingsSelector)) {
          // Use the click target if it has an `id` (or a parent with an `id`).
          var closestEl = el.closest('[id]');
          if (!closestEl) { return; }
          window.location.hash = '#' + closestEl.id;
        }
      });
    }
  }

  function initTableOfContents () {
    if (!document.querySelector('#table-of-contents')) { return; }

    // Sort sections by their offsets and grab reference to table of contents link.
    var sectionScrolls = [];
    $$('.content h2, .content h3, .anchor-heading').forEach(function (heading) {
      var link = document.querySelector('#table-of-contents [href="#' + heading.getAttribute('id') + '"]');
      if (!link) { return; }
      sectionScrolls.push([heading.offsetTop, link]);
    });

    if (!sectionScrolls.length) { return; }

    sectionScrolls.sort(function (a, b) {
      if (a[0] < b[0]) { return -1; }
      if (a[0] > b[0]) { return 1; }
      return 0;
    });

    function highlightHeading (scrollPos) {
      // Account for heading size.
      scrollPos += 40;

      // Reset.
      for (var i = 0; i < sectionScrolls.length; i++) {
        sectionScrolls[i][1].classList.remove('current');
      }

      // Highlight active section's heading link.
      var found = false;
      for (i = 0; i < sectionScrolls.length; i++) {
        if (scrollPos >= sectionScrolls[i][0] &&
            (!sectionScrolls[i + 1] || scrollPos < sectionScrolls[i + 1][0])) {
          sectionScrolls[i][1].classList.add('current');
          found = true;
        }
      }

      // Default to top link.
      if (!found) {
        sectionScrolls[0][1].classList.add('current');
      }
    }

    // Throttle scroll listener.
    var scrollPos = 0;
    var ticking = false;
    window.addEventListener('scroll', function () {
      scrollPos = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          highlightHeading(scrollPos);
          ticking = false;
        });
      }
      ticking = true;
    });

    sectionScrolls[0][1].classList.add('current');
  }

  function initSidebarScrollState () {
    // Sidebar scroll state.
    var sidebarEl = document.querySelector('#sidebar');
    var sidebarLinks = document.querySelectorAll('#sidebar a');

    if (sidebarEl) {
      // Add listeners to links to tell if user is navigating away from aframe.io.
      var sidebarLinkClicked = false;
      function markSidebarLinkClicked () { sidebarLinkClicked = true; }
      for (var i = 0; i < sidebarLinks.length; i++) {
        sidebarLinks[i].addEventListener('click', markSidebarLinkClicked);
      }

      // Store scroll state in localStorage.
      var lsKey = 'sidebar-scroll';
      var scrollTop = localStorage.getItem(lsKey);
      if (scrollTop) { sidebarEl.scrollTop = scrollTop; }
      sidebarEl.style.visibility = 'visible';
      sidebarEl.addEventListener('scroll', function () {
        localStorage.setItem(lsKey, sidebarEl.scrollTop);
      });

      // Clear scroll state if navigating away to different site.
      window.addEventListener('beforeunload', function () {
        if (sidebarLinkClicked) { return; }
        localStorage.setItem(lsKey, null);
      });
    }
  }

  function initHelpers () {
    /**
     * Wraps `querySelector` like jQuery's `$`.
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
     * Wraps `querySelectorAll` like jQuery's `$`.
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
  }

  /**
   * Init XHR handler to subscribe.
   */
  function initSubscribeForm () {
    const form = document.querySelector('#subscribeForm');
    if (!form) { return; }

    const button = form.querySelector('.submit');
    const input = form.querySelector('input[type="email"]');

    form.addEventListener('submit', evt => {
      evt.preventDefault();

      // supermedium/superchimp
      const xhr = new XMLHttpRequest();
      let endpoint = 'https://supermedium.com/mail/subscribe';
      xhr.open('POST', endpoint);

      xhr.addEventListener('load', () => {
        if (parseInt(xhr.status, 10) !== 200) {
          window.location.href = 'https://supermedium/subscribe/';
        }
        if (button) {
          button.disabled = true;
          button.innerHTML = 'Subscribed!';
        }
      });

      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify({
        email: document.querySelector('[name="email"]').value,
        group: '0335f346e8',
        source: 'aframe'
      }));

      return false;
    });

    if (button) {
      input.addEventListener('keydown', () => {
        if (button.hasAttribute('disabled')) {
          button.innerHTML = 'Subscribe';
          button.removeAttribute('disabled');
        }
      });
    }
  }
})();
