"use strict";

const elixir = require('laravel-elixir');

elixir(function(mix) {

});

elixir( (mix) => {

    mix.browserSync({
        files: ['./public/**/*.html'],
        proxy: 'germinate.dev',
    });

    mix.webpack('master.js');

    mix.sass('master.scss');

});