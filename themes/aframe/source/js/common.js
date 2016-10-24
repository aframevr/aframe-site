(function () {
  // Lazy loading for web fonts

  /* fontfaceobserver 2.0.1 - Copyright (c) 2016 - Bram Stein https://github.com/bramstein/fontfaceobserver/ */
  (function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
  function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
  function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

  (function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function q(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
  this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
  function w(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function x(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;x(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);x(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,D=null;function H(){if(null===C){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}C=""!==a.style.font}return C}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
  A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",y=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){null===D&&(D=!!window.FontFace);if(D){var J=new Promise(function(a,b){function e(){(new Date).getTime()-E>=y?b():document.fonts.load(I(c,c.family),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){setTimeout(c,y)});Promise.race([K,J]).then(function(){a(c)},function(){b(c)})}else m(function(){function r(){var b;if(b=-1!=f&&
  -1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==t&&g==t&&h==t||f==u&&g==u&&h==u||f==v&&g==v&&h==v)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=y)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===
  a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,r();G=setTimeout(F,50)}}var e=new q(k),n=new q(k),p=new q(k),f=-1,g=-1,h=-1,t=-1,u=-1,v=-1,d=document.createElement("div"),G=0;d.dir="ltr";w(e,I(c,"sans-serif"));w(n,I(c,"serif"));w(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t=e.a.offsetWidth;u=n.a.offsetWidth;v=p.a.offsetWidth;F();z(e,function(a){f=a;r()});w(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;r()});w(n,I(c,'"'+
  c.family+'",serif'));z(p,function(a){h=a;r()});w(p,I(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());

  /*
  Fonts are loaded through @font-face rules in the CSS whenever an element references them.
  FontFaceObserver creates a referencing element to trigger the font request, and listen for font load events.
  When the fonts is loaded, we enable them by adding a class to `<html>`.
  */
  if ('requestAnimationFrame' in window) {
    window.requestAnimationFrame(function () {
      var errToConsole = console.error.bind(console);
      new window.FontFaceObserver('Fira Sans').load().then(function () {
        document.documentElement.classList.add('font-loaded-sans');
      }).catch(errToConsole);
      new window.FontFaceObserver('Fira Mono').load().then(function () {
        document.documentElement.classList.add('font-loaded-mono');
      }).catch(errToConsole);
    });
  }

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

    // DOCS.
    function anchorId (str) {
      return (str || '').replace(/[^-a-zA-Z0-9,&\s]+/g, '')
                        .replace(/-/g, '_')
                        .replace(/\s+/g, ' ')
                        .trim()
                        .replace(/\s/g, '_')
                        .trim();
    }
    var anchorHeadingsSelector = 'h2[id], h3[id], h4[id], h5[id], h6[id], .copy__wrap > table[id] tr th:first-child, .copy__wrap > table tr[id] td:first-child';
    var tableIds = {};
    var rowIds = {};
    var content = $('.content');

    if (content) {
      // Fix messy `id`s generated from https://github.com/hexojs/hexo-renderer-marked/blob/951baa05/lib/renderer.js#L32.
      // (example: /docs/core/entity.html#setAttribute__28attr_2C_value_2C_componentAttrValue_29)
      var headingsEls = $$('.content h2[id], .content h3[id], .content h4[id], .content h5[id], .content h6[id]');
      headingsEls.forEach(function (headingEl) {
        var headingId = anchorId(headingEl.textContent);
        headingEl.setAttribute('id', headingId);
      });

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

        var tableId = anchorId(tableHeading + ' ' + 'Reference');

        // If this `id` has already been used, append at `-{num}` (starting at `-2`).
        if (tableIds[tableId]) {
          tableId += '-' + (++tableIds[tableId]);
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
})();
