## Getting started

`yarn build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`yarn start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:3000](http://localhost:3000).

`yarn watch` will continually rebuild the application as your source files change.

`yarn dev` will run `yarn start` and `yarn watch` in parallel.

`yarn test` will run jest tests

`yarn prettier` format components

`yarn lint` checking components for TSLint

`yarn story` run Storybook

# Config details

`yarn build` build components into CommonJS and ES6 Modules differnt builds

`yarn build` -> `production` is true  
`yarn dev` -> `production` is false
