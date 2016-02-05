/* global $, singlePage */

(function () {

/* TODO: Swap out iframe on click instead of doing synchronous page loads. */

var path = window.location.pathname;
var pathWithSlash = forceTrailingSlash(path);

function forceTrailingSlash (str) {
  if (str.substr(-1) !== '/') {
    str += '/';
  }
  return str;
}

var examples = {
  "title": "Examples",
  "home": {
    "section": "home",
    "slug": "home",
    "scene_url": "https://aframe.io/aframe/examples/animation-aframe-logo/?ui=false",
    "source_url": "https://github.com/aframevr/aframe/blob/master/examples/animation-aframe-logo/index.html",
    "title": "A-Frame Logo Animation"
  },
  "showcase": [
    {
      "section": "showcase",
      "slug": "helloworld",
      "scene_url": "https://aframe.io/aframe/examples/boilerplate-helloworld/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/boilerplate-helloworld/index.html",
      "title": "Hello World"
    },
    {
      "section": "showcase",
      "slug": "anime-UI",
      "scene_url": "https://aframe.io/aframe/examples/showcase-anime-UI/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/showcase-anime-UI/index.html",
      "title": "Anime UI"
    },
    {
      "section": "showcase",
      "slug": "composite",
      "scene_url": "https://aframe.io/aframe/examples/showcase-composite/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/showcase-composite/index.html",
      "title": "Composite"
    },
    {
      "section": "showcase",
      "slug": "videosphere",
      "scene_url": "https://aframe.io/aframe/examples/template-videosphere/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/template-videosphere/index.html",
      "title": "360 Video"
    },
    {
      "section": "showcase",
      "slug": "curved-mockups",
      "scene_url": "https://aframe.io/aframe/examples/showcase-curved-mockups/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/showcase-curved-mockups/index.html",
      "title": "Curved Mockups"
    },
    {
      "section": "showcase",
      "slug": "spheres-and-fog",
      "scene_url": "https://aframe.io/aframe/examples/showcase-spheres-and-fog/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/showcase-spheres-and-fog/index.html",
      "title": "Spheres & Fog"
    },
    {
      "section": "showcase",
      "slug": "shopping",
      "scene_url": "https://aframe.io/aframe/examples/showcase-shopping/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/showcase-shopping/index.html",
      "title": "Shopping"
    },
    {
      "section": "showcase",
      "slug": "warps",
      "scene_url": "https://aframe.io/aframe/examples/animation-warps/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/animation-warps/index.html",
      "title": "Warp"
    },
    {
      "section": "showcase",
      "slug": "generic-logo",
      "scene_url": "https://aframe.io/aframe/examples/animation-generic-logo/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/animation-generic-logo/index.html",
      "title": "Logo"
    },
    {
      "section": "showcase",
      "slug": "unfold",
      "scene_url": "https://aframe.io/aframe/examples/animation-unfold/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/animation-unfold/index.html",
      "title": "Unfold"
    },
    {
      "section": "showcase",
      "slug": "sky",
      "scene_url": "https://aframe.io/aframe/examples/template-sky/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/template-sky/index.html",
      "title": "Panorama"
    },
    {
      "section": "showcase",
      "slug": "cursor",
      "scene_url": "https://aframe.io/aframe/examples/interaction-cursor/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/interaction-cursor/index.html",
      "title": "Cursor & Hover"
    },
    {
      "section": "showcase",
      "slug": "lookat",
      "scene_url": "https://aframe.io/aframe/examples/interaction-lookat/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/interaction-lookat/index.html",
      "title": "Look At"
    },
    {
      "section": "showcase",
      "slug": "basics",
      "scene_url": "https://aframe.io/aframe/examples/entitycomponent-basics/",
      "source_url": "https://github.com/aframevr/aframe/blob/master/examples/entitycomponent-basics/index.html",
      "title": "Entity-Component"
    }
  ]
};

var examplesSubnav = document.querySelector('#examplesSubnav');
var examplesRoutes = {};

if (examplesSubnav) {
  var li;
  var a;
  var span;
  var url;
  var className = '';

  examples.showcase.forEach(function (item, idx) {
    url = '/examples/' + item.section + '/' + item.slug + '/';

    className = url === pathWithSlash ? ' current' : '';

    li = document.createElement('li');
    li.setAttribute('data-url', url);
    li.setAttribute('data-idx', idx);
    li.className = 'subnav-item' + className;

    a = document.createElement('a');
    a.setAttribute('data-spa-link', '');
    a.setAttribute('href', url);
    a.className = 'subnav-link' + className;

    span = document.createElement('span');
    span.className = 'sidebar__link__text';
    span.textContent = item.title;

    a.appendChild(span);
    li.appendChild(a);
    examplesSubnav.appendChild(li);

    item.url = url;
    item.li = li;
    item.a = a;
    item.span = span;

    examplesRoutes[url] = item;
  });
}

examplesRoutes.__default__ = examples.showcase[0];
examplesRoutes.__home__ = examples.home;

var html = document.documentElement;
var body = document.body;
var rootUrl = html.getAttribute('data-root');
var isHome = html.getAttribute('data-is-home') === 'true';
var defaultTitle = html.getAttribute('data-title');

var currentLink = getCurrentNavLink();
var navLinks = getNavLinks();
var navLinksLength = navLinks.length;

// Trigger `:active` styles when we "click" on examples, previous/next links.
var SHOW_ACTIVE_STYLES_ON_CLICK = true;

function getTitle (title) {
  return defaultTitle.replace('{title}', title);
}

function clickEl (el) {
  if (!el) { return; }
  if (SHOW_ACTIVE_STYLES_ON_CLICK) { el.classList.add('click'); }
  el.click();
}

function clickNavLink (link) {
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

if (navLinks.length) {
  body.addEventListener('keyup', function (e) {
    var left = e.keyCode === 37;
    var right = e.keyCode === 39;
    if (!left && !right) { return; }

    if (!currentLink) {
      // TODO: Swap out.
      window.location.href = rootUrl + 'examples/';
      return;
    }

    var idx = parseInt(currentLink.parentNode.getAttribute('data-idx'), 10);

    var offset = left ? -1 : 1;
    var nextIdx = idx + offset;
    if (nextIdx < 0) { nextIdx = navLinksLength - 1; }

    var destLink = navLinks[nextIdx % navLinksLength];

    clickNavLink(destLink);
  });

  /* TODO: Fix left/right arrows. */
}

var showPage = singlePage(function (href) {

  var hrefWithSlash = forceTrailingSlash(href);

  var exampleIframe = document.querySelector('#exampleIframe');
  if (exampleIframe) {
    var currentExample;
    if (isHome) {
      currentExample = examplesRoutes.__home__;
    } else {
      if (hrefWithSlash in examplesRoutes) {
        currentExample = examplesRoutes[hrefWithSlash];
      }
      if (!currentExample) {
        currentExample = examplesRoutes.__default__;
      }

      document.title = getTitle(currentExample.title);

      currentExample.a.classList.add('current');
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

})();
