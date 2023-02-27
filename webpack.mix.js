let mix = require('laravel-mix');
let path = require("path");
let LiveReloadPlugin = require('webpack-livereload-plugin');

/**
 * Custom webpack configurations.
 */
mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin({
            hostname: 'germinate-spa.test', // Local vagrant machine
            delay: 0,                       // delay for longer builds
        })
    ],
    resolve: {
        alias: {
            /**
             * Alias for importing Sass variables, functions and mixins,
             * @import '~GlobalSass';
             */
            'GlobalSass': path.resolve('resources/assets/sass/bootstrap.scss'),
        },
    },
});

/**
 * Laravel Mix.
 */
mix.disableNotifications()
    /*
     * Set public path for manifest file
     */
    .setPublicPath('public')
   /**
    * JavaScript.
    */
   .js('resources/assets/js/app.js', 'public/js').vue()
   /**
    * Sass.
    */
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/shared.scss', 'public/css')
   /*
    * cache-busting
    */
   .version()
   .sourceMaps()
   /**
    * BrowserSync.
    */
   // .browserSync({
   //      proxy: false,
   //      server: {
   //          baseDir: "public",
   //          index: "index.html"
   //      },
   //      files: [
   //          './public/**/*.*'
   //      ]
   //  })
;
