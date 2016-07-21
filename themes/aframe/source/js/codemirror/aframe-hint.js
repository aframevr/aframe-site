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
  // Components.
  var components = {};
  Object.keys(AFRAME.components).sort().forEach(function (componentName) {
    components[componentName] = null;
  });

  var data = {
    'a-entity': {
      attrs: components
    },
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
    audio: {
      attrs: {
        src: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['none', 'metadata', 'auto'],
        autoplay: ['', 'autoplay'],
        loop: ['', 'loop'],
      }
    },
    img: {
      attrs: {
        src: null,
        crossorigin: ['anonymous', 'use-credentials']
      }
    },
    video: {
      attrs: {
        src: null,
        crossorigin: ['anonymous', 'use-credentials'],
        preload: ['auto', 'metadata', 'none'],
        autoplay: ['', 'autoplay'],
        muted: ['', 'muted']
      }
    }
  };

  // Primitives.
  var primitives = AFRAME.primitives.primitives;
  Object.keys(primitives).sort().forEach(function (primitiveName) {
    data[primitiveName] = {attrs: {}};
    Object.keys(primitives[primitiveName].prototype.mappings).sort().forEach(function (propertyName) {
      if (propertyName.constructor === String) {
        data[primitiveName].attrs[propertyName] = null;
      } else {
        // Support one-to-many mappings in the future.
        propertyName.forEach(function (pName) {
          data[primitiveName].attrs[pName] = null;
        });
      }
    });
    Object.keys(components).sort().forEach(function (componentName) {
      data[primitiveName].attrs[componentName] = null;
    });
  });

  // Global attributes.
  var globalAttrs = {class: null, id: null};
  Object.keys(data).forEach(function (tagName) {
    for (var attr in globalAttrs) {
      data[tagName].attrs[attr] = globalAttrs[attr];
    }
  });

  CodeMirror.aframeSchema = data;
  CodeMirror.registerHelper('hint', 'html', aframeHint);

  function aframeHint (cm, options) {
    var local = {schemaInfo: data};
    if (options) {
      for (var opt in options) {
        local[opt] = options[opt];
      }
    }
    return CodeMirror.hint.xml(cm, local);
  }
});
