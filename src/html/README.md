# HTML pages and fragments

Templates and partials used to build the main pages of our site.

HTML files here go through the build process.

Makes use of `html-loader` dependency to inject partials, see: https://github.com/jantimon/html-webpack-plugin/tree/master/examples/custom-template

*NOTE*: html-loader and any partials do not receive configuration variables from html-webpack-plugin, and the various support options that I've been looking at don't make me happy either. Partials are assumed to be pure HTML for now, no interpolation.
