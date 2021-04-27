let mix = require('laravel-mix');
let path = require("path");

/**
 * Custom webpack configurations.
 */
mix.webpackConfig({
    resolve: {
        alias: {
            /**
             * Alias for importing Sass variables, functions and mixins,
             * @import '~GlobalSass';
             */
            'GlobalSass': path.resolve('resources/assets/sass/bootstrap.scss'),
        }
    },
});

/**
 * Laravel Mix.
 */
mix.disableNotifications()
   /**
    * JavaScript.
    */
   .js('resources/assets/js/app.js', 'public/js').vue()
   /**
    * Sass.
    */
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/shared.scss', 'public/css')
   /**
    * BrowserSync.
    */
   .browserSync({
        proxy: false,
        server: {
            baseDir: "public",
            index: "index.html"
        },
        files: [
            './public/**/*.*'
        ]
    })
;
