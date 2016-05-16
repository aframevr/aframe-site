# Directory Structure

Powered by [Hexo](https://hexo.io/)

- `_config.yml` - Hexo configuration.
- `multidep/` - Older versions of A-Frame installed through `mulitdep`. Used to generate older versions of the docs.
- `scripts/` - Customization of Hexo generator and helpers.
  - `generators.js` - Configuration of Hexo generator (mainly for redirects).
  - `helpers.js` - Adding helper functions available to templates,
- `src` - Content.
  - `_data/` - `examples.json` for populating the homepage.
  - `_posts/` - Blog posts.
  - `blog/index.md` - Hexo blog section metadata. Does **not** contain blog posts.
  - `community/index.md` - Community page.
  - `faq/index.md` - FAQ page.
  - `images/` - Site and blog images
- `themes/` - Layout, CSS, releases.
  - `aframe/`
    - `layout/` - HTML and templates.
    - `source/` - Site assets (CSS, fonts, images, JS)
      - `releases/` - A-Frame releases.
