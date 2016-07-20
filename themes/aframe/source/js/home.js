(function () {

// Hook examples navigation to toggle scenes.
var exampleDetailEls = document.querySelectorAll('[data-example-detail]');
var exampleLinkEls = document.querySelectorAll('[data-example-link]');
var sceneEl = document.querySelector('.home__examples__scene');
var wrapperEl = document.querySelector('.home__examples');

// Add event listeners to example nav.
for (var i = 0; i < exampleLinkEls.length; i++) {
  // Change the scene when an example link is clicked.
  exampleLinkEls[i].addEventListener('click', function (e) {
    // Hide all detail blocks, then show the active one.
    var slug = this.dataset.exampleLink;
    var detailEl = wrapperEl.querySelector('[data-example-detail="' + slug + '"]');
    toggleDetailEl(detailEl);

    // Swap <a-scene>.
    var codeEl = detailEl.querySelector('.home__examples__code');
    sceneEl.innerHTML = codeEl.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

    // Toggle active example button classes
    exampleLinkEls.forEach(function (link) {
      link.classList.remove('home__examples--active');
    });
    e.target.classList.add('home__examples--active');
  });
}

// Hide all example detail blocks, show new active one.
function toggleDetailEl (activeDetailEl) {
  for (var i = 0; i < exampleDetailEls.length; i++) {
    exampleDetailEls[i].classList.remove('home__examples__detail--active');
  }
  activeDetailEl.classList.add('home__examples__detail--active');
}

})();
