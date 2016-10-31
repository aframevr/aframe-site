# Directory Structure

Powered by [Hexo](https://hexo.io/)

- `_config.yml` - Hexo configuration.
- `.multidep/` - Older versions of A-Frame installed through [multidep](https://github.com/joliss/node-multidep). Used to generate older versions of the docs.
- `scripts/` - Customization of Hexo generator and helpers.
  - `generators.js` - Configuration of Hexo generator.
  - `helpers.js` - Adding helper functions available to templates,
  - `redirects.js` - Generate redirect pages in case of moved pages.
- `src` - Content. Do not put CSS/JavaScript files here because Hexo will malform them.
  - `_data/` - `examples.json` for populating the homepage.
  - `_posts/` - Blog posts.
  - `blog/index.md` - Hexo blog section metadata. Does **not** contain blog posts.
  - `community/index.md` - Community page.
  - `faq/index.md` - FAQ page.
  - `images/` - Site and blog images
- `themes/` - Layout, CSS, releases.
  - `aframe/`
    - `layout/` - HTML and templates.
      - `layout.ejs` - Base template.
      - `index.ejs` - Homepage.
      - `partials/` - Reusable HTML partials.
    - `source/` - Site assets (CSS, fonts, images, JS). All files and folders will be copied to site root.
      - `css/` - CSS and Stylus.
      - `js/` - JavaScript files.
      - `releases/` - A-Frame releases.
