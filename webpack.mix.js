const { mix } = require('laravel-mix');

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