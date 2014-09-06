/**
 *  Modules
 */
var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');

var cache = require('gulp-cache');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var size = require('gulp-size');

var livereload = require('gulp-livereload');

var pagespeed = require('psi');

/**
 *  Configuration
 */
var Config = {

    SCSS: {
        source: 'build/scss/master.scss',
        destination: 'public/css/'
    },
    JavaScript: {
        source: "['build/js/vendor/*.js', 'build/js/**/*.js']",
        destination: 'public/js/'
    },
    Images: {
        source: 'build/img/**/*',
        destination: 'public/img'
    },
    PageSpeed: {
        url: 'http://example.com',
        locale: 'en_US',
        strategy: 'mobile',
        threshold: 70
    }
};

/**
 *  SCSS
 */
gulp.task('scss', function() {
    return gulp.src(Config.SCSS.source)
        .pipe(sass({style:'compressed'}))
        .pipe(autoprefixer('last 5 version'))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(Config.SCSS.destination))
        .pipe(size({title: 'Styles ==>'}))
});

/**
 *  JavaScript
 */
gulp.task('js', function(){
    return gulp.src(Config.JavaScript.source)
        .pipe(concat('master.js'))
        .pipe(rename({suffix:'.min'}))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(uglify())
        .pipe(gulp.dest(Config.JavaScript.destination))
        .pipe(size({title: 'JavaScript ==>'}))
});

/**
 *  Images
 */
gulp.task('images', function(){
    return gulp.src(Config.Images.source)
        .pipe(cache(imagemin({progressive: true,interlaced: true})))
        .pipe(gulp.dest(Config.Images.destination))
        .pipe(size({title: 'Images ==>'}));
});

/**
 *  Google PageSpeed Insights
 */
gulp.task('pagespeed', pagespeed.bind(null, {
    url: Config.PageSpeed.url,
    locale: Config.PageSpeed.locale,
    strategy: Config.PageSpeed.strategy,
    threshold: Config.PageSpeed.threshold,
}));

/**
 *  Default
 */
gulp.task('default', function(){
    livereload.listen();
    gulp.watch(['build/scss/*.scss', 'build/scss/**/*.scss'], ['scss']);
    gulp.watch(['build/js/vendor/*.js', 'build/js/**/*.js'], ['js']);
    gulp.watch(['public/*.html', 'public/js/*.js', 'public/css/*.css']).on('change', livereload.changed);
});