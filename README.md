# aframe-site

Powers the **[A-Frame Site](https://aframe.io/)**.

This site is built using [hexo](http://hexo.io/). Site content is written in
[Markdown](http://daringfireball.net/projects/markdown/syntax) (and located in
the [`src/`](src/) directory). Pull requests are welcome!

## Local Development

Clone [this repository](https://github.com/aframevr/aframe-site):

    git clone git@github.com:aframevr/aframe-site.git && cd aframe-site

To install the dependencies and start the local development server:

    npm install && npm run installdocs && npm start

If you are testing something related to the A-Frame examples, you can set up
local configuration settings to point the examples to your local A-Frame
examples:

    cp _config.local.yml.dist _config.local.yml

Then load __[`http://localhost:4000/`](http://localhost:4000/)__!

You may need to occasionally need to restart the server if you cause breaking
changes. Just proceed as usual. When developing on the site scripts,
generators, and helpers in `scripts/`, you will need to restart the server on
every change.

### Testing Documentation

Documentation lives in the [A-Frame GitHub
repo](https://github.com/aframevr/aframe/tree/master/docs).

First, clone the [A-Frame GitHub repo](https://github.com/aframevr/aframe).

    cd aframe
    npm link

And then link `aframe-site` to `aframe`:

    cd aframe-site
    npm link aframe

Then the `master` documentation will update as you work on them from the
A-Frame repository. This works because we have pointed the A-Frame site, via a
soft symbolic link, to the documentation installed in
`node_modules/aframe/docs/`.

Old versions of documentation are handled through `multidep.json`. Run `npm run
bumpdocs` to try to pull the latest documentation from GitHub branches (e.g.,
`aframevr/aframe#docs-v0.3.0`).

## Deployment

Push changes to GitHub, and [@a-frobot](https://github.com/a-frobot/) will
automatically deploy the site.

## Search

The documentation search service is hosted by [Algolia
DocSearch](https://community.algolia.com/docsearch/). The indexing
configuration can be found at the [DocSearch config
repo](https://github.com/algolia/docsearch-configs/blob/master/configs/aframe.json).

## Credits

Source adopted from [Vue's site](https://github.com/vuejs/vuejs.org/).

## License

Licensed under [The MIT License](LICENSE).

