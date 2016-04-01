var utils = require('../lib/utils');

hexo.extend.generator.register('blog-post-introducing-aframe', function () {
  return {
    path: 'blog/2015/12/16/0.0.10-release/',
    data: utils.createRedirectResponse(hexo, 'blog/2015/12/16/introducing-aframe/')
  };
});

hexo.extend.generator.register('docs-redirects', function () {
  return [
    {
      path: 'docs/',
      data: utils.createRedirectResponse(hexo, 'docs/guide/')
    },
    {
      path: 'docs/components/loader.html',
      data: utils.createRedirectResponse(hexo, 'docs/components/collada-model.html')
    },
    {
      path: 'docs/core/animation.html',
      data: utils.createRedirectResponse(hexo, 'docs/core/animations.html')
    },
    {
      path: 'docs/core/assets.html',
      data: utils.createRedirectResponse(hexo, 'docs/core/asset-management-system.html')
    },
    {
      path: 'docs/core/mixin.html',
      data: utils.createRedirectResponse(hexo, 'docs/core/mixins.html')
    },
    {
      path: 'docs/core/templates.html',
      data: utils.createRedirectResponse(hexo, 'https://github.com/ngokevin/aframe-template-component')
    },
    {
      path: 'docs/guide/cameras-and-lights.html',
      data: utils.createRedirectResponse(hexo, 'docs/guide/building-a-basic-scene.html')
    },
    {
      path: 'docs/guide/entering-vr.html',
      data: utils.createRedirectResponse(hexo, 'http://mozvr.com/#start')
    },
    {
      path: 'docs/guide/installation.html',
      data: utils.createRedirectResponse(hexo, 'docs/guide/getting-started.html')
    },
    {
      path: 'docs/guide/objects.html',
      data: utils.createRedirectResponse(hexo, 'docs/guide/building-a-basic-scene.html')
    },
    {
      path: 'docs/guide/positioning.html',
      data: utils.createRedirectResponse(hexo, 'docs/guide/building-a-basic-scene.html#Transforming-the-Box')
    },
    {
      path: 'docs/primitives/a-cube.html',
      data: utils.createRedirectResponse(hexo, 'docs/primitives/a-box.html')
    },
    {
      path: 'docs/primitives/a-model.html',
      data: utils.createRedirectResponse(hexo, 'docs/primitives/a-collada-model.html')
    },
    {
      path: 'aframe-pro-final-v4.1.16',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/house',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/house/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/house/',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/house/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/hose',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/hose/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/hose/',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/hose/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/metaverse',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/metaverse/')
    },
    {
      path: 'aframe-pro-final-v4.1.16/metaverse/',
      data: utils.createRedirectResponse(hexo, 'https://ngokevin.github.io/aframe-vrml-component/metaverse/')
    }
  ];
});

hexo.extend.generator.register('examples.json', function (locals) {
  return {
    path: 'examples/index.json',
    data: JSON.stringify(locals.data.examples)
  };
});

hexo.extend.generator.register('examples', function (locals) {
  var self = this;
  var routes = [];

  function addRoute (path, data, layout) {
    routes.push({
      path: path,
      data: data,
      layout: layout
    });
  }

  addRoute('guide/', utils.createRedirectResponse(hexo, 'docs/guide/'));

  if (locals.data.examples) {
    var examples = locals.data.examples.showcase;
    var examplesLookup = {};
    var examplesRedirect = utils.createRedirectResponse(hexo, 'examples/');

    var sections = [];

    examples.forEach(function (example, idx) {
      var section = example.section;

      var permalink = utils.urljoin('examples', section, example.slug, '/');
      example.type = 'examples';
      example.url = permalink;
      addRoute(permalink, example, 'examples');
      examplesLookup[permalink] = example;

      if (idx === 0) {
        addRoute('examples/', example, 'examples');
      }

      if (sections.indexOf(section) === -1) {
        sections.push(section);
      }
    });

    sections.forEach(function (sectionSlug) {
      // TODO: Eventually build out separate pages for each category in Examples.
      addRoute('examples/' + sectionSlug + '/', examplesRedirect);
    });

    hexo.locals.set('examples_by_urls', function () {
      return examplesLookup;
    });
  }

  return routes;
});
