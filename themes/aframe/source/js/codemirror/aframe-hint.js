/**
 * A-Frame hinting and autocompletion for CodeMirror.
 */
(function(mod) {
  if (typeof exports == 'object' && typeof module == 'object')
    mod(require('../../lib/codemirror'), require('./xml-hint'));
  else if (typeof define == 'function' && define.amd)
    define(['../../lib/codemirror', './xml-hint'], mod);
  else
    mod(CodeMirror);
})(function(CodeMirror) {
  var s = {attrs: {}};
  var components = {};
  Object.keys(AFRAME.components).forEach(function (componentName) {
    components[componentName] = null;
  });

  var data = {
    'a-assets': {
      attrs: {
        timeout: null
      }
    },
    'a-asset-item': {
      attrs: {
        src: null
      }
    },
    'a-entity': {
      attrs: components
    },
    audio: {
      attrs: {
        src: null, mediagroup: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['none', 'metadata', 'auto'],
        autoplay: ['', 'autoplay'],
        loop: ['', 'loop'],
        controls: ['', 'controls']
      }
    },
    img: {
      attrs: {
        alt: null, src: null, ismap: null, usemap: null, width: null, height: null,
        crossorigin: ['anonymous', 'use-credentials']
      }
    },
    video: {
      attrs: {
        src: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['auto', 'metadata', 'none'],
        autoplay: ['', 'autoplay'],
        mediagroup: ['movie'],
        muted: ['', 'muted']
      }
    }
  };

  var globalAttrs = {
    class: null,
    id: null
  };

  function populate (obj) {
    for (var attr in globalAttrs) {
      if (globalAttrs.hasOwnProperty(attr)) {
        obj.attrs[attr] = globalAttrs[attr];
      }
    }
  }

  populate(s);
  for (var tag in data) if (data.hasOwnProperty(tag) && data[tag] != s) {
    populate(data[tag]);
  }

  CodeMirror.aframeSchema = data;

  function aframeHint (cm, options) {
    var local = {schemaInfo: data};
    if (options) {
      for (var opt in options) {
        local[opt] = options[opt];
      }
    }
    return CodeMirror.hint.xml(cm, local);
  }

  CodeMirror.registerHelper('hint', 'html', aframeHint);
});
