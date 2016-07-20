(function () {

var codeEls = document.querySelectorAll('[data-example-code]');
var exampleLinkEls = document.querySelectorAll('[data-example-link]');
var sceneEl = document.querySelector('.home__examples__scene');
var wrapperEl = document.querySelector('.home__examples');

// Add event listeners to example nav.
for (var i = 0; i < exampleLinkEls.length; i++) {
  // Change the scene when an example link is clicked.
  exampleLinkEls[i].addEventListener('click', function () {
    // Hide all source code, then show the active one.
    var slug = this.dataset.exampleLink;
    var codeEl = wrapperEl.querySelector('[data-example-code="' + slug + '"]');
    toggleCodeEl(codeEl);

    // Swap <a-scene>.
    sceneEl.innerHTML = codeEl.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  });
}

// Hide all example source code blocks, show new active one.
function toggleCodeEl (activeCodeEl) {
  for (var i = 0; i < codeEls.length; i++) {
    codeEls[i].classList.remove('home__examples__code--active');
  }
  activeCodeEl.classList.add('home__examples__code--active');
}

})();
