(function () {

var exampleDetailEls = document.querySelectorAll('[data-example-detail]');
var exampleLinkEls = document.querySelectorAll('[data-example-link]');
var textAreaEls = document.querySelectorAll('.home__examples__code');
var sceneEl = document.querySelector('.home__examples__scene');
var wrapperEl = document.querySelector('.home__examples');

var codeMirrors = [];

var debouncedSceneChange = debounce(function (instance) {
  sceneEl.innerHTML = instance.doc.getValue();
}, 500);

var initCodeMirror = function () {
  for (var i = 0 ; i < textAreaEls.length; i++) {
    var codeMirror = CodeMirror.fromTextArea(textAreaEls[i], {
      extraKeys: {'Ctrl-Space': 'autocomplete'},  // Autocomplete (xml-hint.js, html-hint.js).
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

      // FIXME: Hack to refresh the active CodeMirror.
      window.dispatchEvent(new Event('resize'));
    });
  }

  // Hide all example detail blocks, show new active one.
  function toggleDetailEl (activeDetailEl) {
    for (var i = 0; i < exampleDetailEls.length; i++) {
      exampleDetailEls[i].classList.remove('home__examples__detail--active');
    }
    activeDetailEl.classList.add('home__examples__detail--active');
  }
}

initCodeMirror();
initNav();

})();
