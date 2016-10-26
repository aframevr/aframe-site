/* global $ */
(function () {
// Remove non-mobile examples on mobile.
if (settings.isMobile) {
  var nonMobileExamples = document.querySelectorAll('[data-supports-mobile="false"]');
  for (var i = 0; i < nonMobileExamples.length; i++) {
    nonMobileExamples[i].parentNode.removeChild(nonMobileExamples[i]);
  }
}

// Hook up arrow keys.
document.body.addEventListener('keyup', function (e) {
  var currentLink;
  var left = e.keyCode === 37;
  var right = e.keyCode === 39;
  if (!left && !right) { return; }
  currentLink = getCurrentNavLink();
  if (!currentLink) { return; }
  clickNavLink(left ? getPrevNavLink() : getNextNavLink());
});

// Hook up navigation arrows.
var examplePrev = document.querySelector('#examplePrev');
var exampleNext = document.querySelector('#exampleNext');
examplePrev.addEventListener('click', function () {
  window.location.href = getDestNavLink(true);
});
exampleNext.addEventListener('click', function () {
  window.location.href = getDestNavLink(false);
});

// Inspector.
var exampleInspector = document.querySelector('#exampleInspector');
if (exampleInspector) {
  var exampleIframe = document.querySelector('#exampleIframe');
  var exampleViewsource = document.querySelector('#exampleViewSource');
  exampleInspector.addEventListener('click', function () {
    // <ctrl> + <alt> + i.
    exampleIframe.contentWindow.postMessage('INJECT_AFRAME_INSPECTOR', '*');
    exampleInspector.style.display = 'none';
    exampleViewsource.style.display = 'none';
  });
}

function clickNavLink (link) {
  var currentLink = getCurrentNavLink();
  if (!currentLink || currentLink === link) { return; }
  currentLink.classList.remove('current');
  currentLink.classList.remove('click');
  // Click link.
  link.classList.add('click');
  link.click();
  currentLink = link;
  currentLink.classList.add('current');
  currentLink.classList.remove('click');
}

function getCurrentNavLink () {
  return document.querySelector('.examples-subnav li[data-current="true"]');
}

function getDestNavLink (prev) {
  var link = getCurrentNavLink()
  var newLink = prev ? link.previousElementSibling : link.nextElementSibling;
  if (!newLink) { newLink = document.querySelector('.examples-subnav > li:first-child'); }
  return newLink.querySelector('a').getAttribute('href');
}

function getPrevNavLink () {
  return getDestNavLink(true);
}

function getNextNavLink () {
  return getDestNavLink(false);
}
})();
