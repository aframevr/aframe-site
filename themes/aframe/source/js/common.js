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

  var main = $('#main');
  var doc = document.documentElement;
  var body = document.body;
  var header = $('#header');
  var menu = $('.sidebar');
  var content = $('.content');
  var mobileBar = $('#mobile-bar');

  var menuButton = mobileBar.querySelector('.menu-button');
  menuButton.addEventListener('click', function () {
    menu.classList.toggle('open');
  });

  body.addEventListener('click', function (e) {
    if (e.target !== menuButton && !menu.contains(e.target)) {
      menu.classList.remove('open');
    }
  });

  // build sidebar
  var currentPageAnchor = menu.querySelector('.sidebar-link.current');
  var isAPI = $('.content').classList.contains('api');
  if (currentPageAnchor || isAPI) {
    var allLinks = [];
    var sectionContainer;
    if (isAPI) {
      sectionContainer = $('.menu-root');
    } else {
      sectionContainer = document.createElement('ul');
      sectionContainer.className = 'menu-sub';
      currentPageAnchor.parentNode.appendChild(sectionContainer);
    }
    var h2s = $$('h2', content);
    if (h2s.length) {
      h2s.forEach(function (h) {
        sectionContainer.appendChild(makeLink(h));
        var h3s = collectH3s(h);
        allLinks.push(h);
        allLinks.push.apply(allLinks, h3s);
        if (h3s.length) {
          sectionContainer.appendChild(makeSubLinks(h3s, isAPI));
        }
      });
    } else {
      h2s = $$('h3', content);
      h2s.forEach(function (h) {
        sectionContainer.appendChild(makeLink(h));
        allLinks.push(h);
      });
    }

    var animating = false;
    sectionContainer.addEventListener('click', function (e) {
      e.preventDefault()
      if (e.target.classList.contains('section-link')) {
        menu.classList.remove('open');
        setActive(e.target);
        animating = true;
        setTimeout(function () {
          animating = false
        }, 400);
      }
    }, true)

    // Make links clickable.
    allLinks.forEach(makeLinkClickable);

    // Init smooth scroll.
    smoothScroll.init({
      speed: 400,
      offset: window.innerWidth > 720 ? 40 : 58
    });
  }

  // Listen for scroll event to do positioning & highlights.
  window.addEventListener('scroll', updateSidebar);
  window.addEventListener('resize', updateSidebar);

  function updateSidebar () {
    var top = doc && doc.scrollTop || body.scrollTop;
    var headerHeight = header.offsetHeight;
    main.className = top > headerHeight ? 'fix-sidebar' : '';
    if (animating || !allLinks) { return; }
    var last;
    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i];
      if (link.offsetTop > top) {
        if (!last) last = link;
        break;
      } else {
        last = link;
      }
    }
    if (last) { setActive(last.id); }
  }

  function makeLink (h) {
    var li = document.createElement('li');
    var text = h.textContent.replace(/\(.*\)$/, '');
    // Make sure the ids are linkable.
    h.id = h.id
      .replace(/\(.*\)$/, '')
      .replace(/\$/, '');
    li.innerHTML = '<a class="section-link" data-scroll href="#' + h.id + '"></a>';
    li.querySelector('a').textContent = text;
    return li;
  }

  function collectH3s (h) {
    var h3s = [];
    var next = h.nextSibling;
    while (next && next.tagName !== 'H2') {
      if (next.tagName === 'H3') {
        h3s.push(next);
      }
      next = next.nextSibling;
    }
    return h3s;
  }

  function makeSubLinks (h3s, small) {
    var container = document.createElement('ul');
    if (small) {
      container.className = 'menu-sub';
    }
    h3s.forEach(function (h) {
      container.appendChild(makeLink(h));
    });
    return container;
  }

  function setActive (id) {
    var previousActive = menu.querySelector('.section-link.active');
    var currentActive = typeof id === 'string' ? menu.querySelector('.section-link[href="#' + id + '"]') : id;
    if (currentActive !== previousActive) {
      if (previousActive) { previousActive.classList.remove('active'); }
      currentActive.classList.add('active');
    }
  }

  function makeLinkClickable (link) {
    var wrapper = document.createElement('a');
    wrapper.href = '#' + link.id;
    wrapper.setAttribute('data-scroll', '');
    link.parentNode.insertBefore(wrapper, link);
    wrapper.appendChild(link);
  }

  // Search with SwiftType.
  (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
  (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
  e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
  })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

  _st('install','xUTNSv6o6-VBbrvLWYcS','2.0.0');

  // version select
  $('.version-select').addEventListener('change', function (e) {
    var version = e.target.value;
    if (version.indexOf('1.') !== 0) {
      version = version.replace('.', '');
      var section = window.location.pathname.match(/\/(\w+?)\//)[1];
      window.location.assign('http://' + version + '.aframe.io/' + section + '/');
    } else {
      // TODO when 1.x is out
    }
  });

  if (!navigator.onLine) {
    // When you're on the airplane and Gogo Inflight Internet or Bongo Wireless
    // have got you down, we load the examples from our local
    // `aframe` and `aframe-core` dev servers.
    $$('iframe[src*="//aframe.github.io/aframe/"]').forEach(function (iframe) {
      iframe.src = iframe.setAttribute('src', iframe.src.replace('//aframe.github.io/aframe/', '//' + window.location.hostname + ':9000/'));
    });
    $$('iframe[src*="//aframe.github.io/aframe-core/"]').forEach(function (iframe) {
      iframe.src = iframe.setAttribute('src', iframe.src.replace('//aframe.github.io/aframe-core/', '//' + window.location.hostname + ':9001/'));
    });
  }

})()
