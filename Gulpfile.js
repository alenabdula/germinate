//
//  Germinate Build Script, Version 0.0.1 Alpha
//
/* Gulp */
var gulp = require('gulp');

/* SCSS */
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

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

/* Google PageSpeed Insights */
var psi = require('psi');
var key = '';
var url = 'http://fivestarmarket.net';

/* PageSpeed Insights, Mobile */
gulp.task('mobile', function () {
    return psi(url, {
        // key: key
        nokey: 'true',
        strategy: 'mobile',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

/* PageSpeed Insights, Desktop */
gulp.task('desktop', function () {
    return psi(url, {
        // key: key,
        nokey: 'true',
        strategy: 'desktop',
    }, function (err, data) {
        console.log(data.score);
        console.log(data.pageStats);
    });
});

/* SCSS */
gulp.task('scss', function() {
    return sass('src/scss/app.scss', {style:'compressed'})
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer('last 5 version'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(size({title: 'Styles ==>'}));
});

/* JavaScript */
gulp.task('javascript', function() {
    return gulp.src([
            'src/javascript/vendor/**/*.js',
            'src/javascript/includes/**/*.js',
            'src/javascript/*.js',
        ])
        .on('error', function(err) {
            console.error('Error!', err.message);
        })
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
        .pipe(gulp.dest('public/img'));
});

/* BrowserSync */
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'public',
        },
        // proxy: "germinate.dev",
        // open: false,
    });
});

/* BrowserSync Manual Reload */
gulp.task('browser-sync-reload', function () {
    browserSync.reload();
});

/* Watch */
gulp.task('default', ['browser-sync'], function() {
    gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['scss']);
    gulp.watch(['src/javascript/*.js', 'src/javascript/**/*.js'], ['javascript']);
    gulp.watch(['public/*.html'], ['browser-sync-reload']);
});