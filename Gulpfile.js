//
//  Germinate Build Script, Version 0.0.2 Alpha
//
/* Gulp */
var gulp = require('gulp');

/* SCSS */
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

/* Utilities */
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var size = require('gulp-size');

/* JavaScript */
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var reporter = require('jshint-stylish');

/* Images */
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

/* BrowserSync */
var browserSync = require('browser-sync');

/* SCSS */
gulp.task('scss', function () {
    return sass('src/scss/app.scss', {
            style:'compressed',
            sourcemap: true
        })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(autoprefixer('last 5 version'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(size({title: 'Styles ==>'}));
});

/* JavaScript */
gulp.task('javascript', function () {
    return gulp.src([
            'src/javascript/vendor/**/*.js',
            'src/javascript/includes/**/*.js',
            'src/javascript/*.js',
        ])
        //.on('error', function (err) {
        //    console.error('Error!', err.message);
        //})
        .pipe(concat('app.js'))
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('public/js/'))
        .pipe(size({title: 'JavaScript ==>'}));
});

/* Images */
gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use:[pngquant()]}))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('public/img'));
});

/* BrowserSync */
gulp.task('browser-sync', function () {
    browserSync({
        // Option 1
        server: {
            baseDir: 'public',
         },
        // Option 2
        // proxy: "germinate.dev",
    });
});

/* BrowserSync Manual Reload */
gulp.task('browser-sync-reload', function () {
    browserSync.reload();
});

/* Watch */
//
//gulp.task('default', ['browser-sync'], function () {
//    gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['scss']);
//    gulp.watch(['src/javascript/*.js', 'src/javascript/**/*.js'], ['javascript']);
//    gulp.watch(['public/*.html'], ['browser-sync-reload']);
//});