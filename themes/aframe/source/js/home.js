(function () {

var NAV_LINK_ACTIVE = 'home__examples__nav__link--active';

var exampleDetailEls = document.querySelectorAll('[data-example-detail]');
var exampleLinkEls = document.querySelectorAll('[data-example-link]');
var textAreaEls = document.querySelectorAll('.home__examples__code');
var sceneEl = document.querySelector('.home__examples__scene');
var wrapperEl = document.querySelector('.home__examples');

var codeMirrors = [];

var debouncedSceneChange = debounce(function (instance) {
  sceneEl.innerHTML = instance.doc.getValue();
}, 500);

initCodeMirror();
initNav();
initMobileNav();

function initCodeMirror () {
  for (var i = 0 ; i < textAreaEls.length; i++) {
    var codeMirror = CodeMirror.fromTextArea(textAreaEls[i], {
      extraKeys: {'Ctrl-Space': 'autocomplete'},  // Autocomplete (xml-hint.js, html-hint.js).
      lineWrapping: true,
      mode: 'htmlmixed',  // `htmlmixed` mode (htmlmixed.js).
      schemaInfo: CodeMirror.aframeSchema,  // HTML linter (html-hint.js addon).
      styleActiveLine: true,  // Highlight active line (active-line.js addon).
      theme: 'aframe',  // CSS (css/aframe-codemirror-theme.styl).
      value: textAreaEls[0].dataset.value
    });
    codeMirror.on('changes', debouncedSceneChange);
    codeMirrors.push(codeMirror);
  }
};

/**
 * Hook examples navigation to toggle scenes.
 */
function initNav () {
  // Add event listeners to example nav.
  for (var i = 0; i < exampleLinkEls.length; i++) {
    // Change the scene when an example link is clicked.
    exampleLinkEls[i].addEventListener('click', function () {
      goToScene(this.dataset.index);
    });
  }
}

function goToScene (i) {
  // Hide all detail blocks, then show the active one.
  var detailEl = exampleDetailEls[i];
  toggleDetailEl(detailEl);

  // Toggle active example button classes
  for (var j = 0; j < exampleLinkEls.length; j++) {
    exampleLinkEls[j].classList.remove(NAV_LINK_ACTIVE);
  }
  exampleLinkEls[i].classList.add(NAV_LINK_ACTIVE);

  // Swap <a-scene>.
  var codeEl = detailEl.querySelector('.home__examples__code');
  sceneEl.innerHTML = codeEl.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  // FIXME: Hack to refresh the active CodeMirror.
  window.dispatchEvent(new Event('resize'));

  /**
   * Hide all example detail blocks, show new active one.
   */
  function toggleDetailEl (activeDetailEl) {
    for (var j = 0; j < exampleDetailEls.length; j++) {
      exampleDetailEls[j].classList.remove('home__examples__detail--active');
    }
    exampleDetailEls[i].classList.add('home__examples__detail--active');
  }
}

/**
 * Hook the mobile navigation arrows to go through the examples nav.
 */
function initMobileNav () {
  var prevEls = document.querySelectorAll('.home__examples__prev');
  var nextEls = document.querySelectorAll('.home__examples__next');

  for (var i = 0; i < prevEls.length; i++) {
    prevEls[i].addEventListener('click', handlePrev);
  }
  for (i = 0; i < nextEls.length; i++) {
    nextEls[i].addEventListener('click', handleNext);
  }

  function handlePrev () {
    var currentIndex = parseInt(document.querySelector('.' + NAV_LINK_ACTIVE).dataset.index);
    var prevIndex = currentIndex - 1;
    if (currentIndex === 0) {
      prevIndex = exampleLinkEls.length - 1;
    }
    goToScene(prevIndex);
  }

  function handleNext () {
    var currentIndex = parseInt(document.querySelector('.' + NAV_LINK_ACTIVE).dataset.index);
    var nextIndex = currentIndex + 1;
    if (nextIndex === exampleLinkEls.length) {
      nextIndex = 0
    }
    goToScene(nextIndex);
  }
}

})();
