const { mix } = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            'GlobalSass': path.resolve('resources/assets/sass/_bootstrap.scss'),
        }
    },
});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
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