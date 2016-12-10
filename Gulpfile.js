"use strict";

const elixir = require('laravel-elixir');

elixir( (mix) => {
    /**
     * BrowserSync
     * Live reloads to URL pushing, form replication to click mirroring,
     * it cuts out repetitive manual tasks
     * https://www.browsersync.io
     */
    mix.browserSync({
        proxy: 'germinate.dev',
    });
    /**
     * webpack is a module bundler. It takes modules with dependencies
     * and generates static assets representing those modules.
     * http://webpack.github.io/docs/what-is-webpack.html
     */
    mix.webpack('master.js');
    /**
     * Sass is a CSS extension language.
     * It allows you to use variables, nested rules, mixins, inline imports, and more.
     * http://sass-lang.com
     */
    mix.sass('master.scss');
});