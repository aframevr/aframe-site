# aframe-site

Powers the __[A-Frame site](https://aframe.io/)__.

This site is built using [hexo](http://hexo.io/). Site content is written in
[Markdown](http://daringfireball.net/projects/markdown/syntax) (and located in
the [`src/`](src/) directory). Pull requests are welcome!

## Local Development

To install the dependencies and start the local development server:

    npm install && npm start

Then load __[`http://localhost:4000/`](http://localhost:4000/)__!

You may need to occasionally need to restart the server if you cause breaking
changes. Just proceed as usual.

## Writing Documentation

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

Old versions of documentation are handled through `multidep.json`.

## Deployment

To deploy this to production (GitHub Pages):

    npm run deploy

This will push the site files to
[aframevr/aframevr.github.io](https://github.com/aframevr/aframevr.github.io).
It will soon be **[live](https://aframe.io/)**!

## Credits

Source adopted from the awesome [@vuejs](https://github.com/vuejs/)
[site](https://github.com/vuejs/vuejs.org/).

## License

Licensed under [The MIT License](LICENSE).
