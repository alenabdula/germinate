"use strict";

const elixir = require('laravel-elixir');

elixir( (mix) => {

    mix.browserSync({
        files: ['./public/**/*'],
        proxy: 'germinate.dev',
    });

    mix.webpack('master.js');

    mix.sass('master.scss');

});