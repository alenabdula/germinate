/* Helpers */
function consoleEventReporter(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

/* Gulp */
var gulp = require('gulp');

/* SCSS */
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

/* Utilities */
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var size = require('gulp-size');

/* JavaScript */
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var stylish = require('jshint-stylish');

/* BrowserSync */
var browserSync = require('browser-sync');

gulp.task('scss', function () {
  return gulp.src('src/scss/app.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: 'expanded' }).on( 'error', sass.logError ))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer({browsers: ['last 3 versions', '> 5%', 'Firefox ESR']}))
  .pipe(gulp.dest('public/css/'))
  .pipe(browserSync.reload({ stream: true }))
  .pipe(size({title: 'Styles ==>'}));
});

/* JavaScript */
gulp.task('javascript', function () {
  return gulp.src([
    './src/javascript/vendor/**/*.js',
    './src/javascript/includes/**/*.js',
    './src/javascript/app.js',
  ])
  .pipe(concat('app.js'))
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'))
  .pipe(uglify())
  .pipe(rename({
    basename: "app",
    suffix:'.min',
    extname: ".js"
  }))
  .pipe(gulp.dest('./public/js/'))
  .pipe(size({title: 'JavaScript ==>'}));
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
gulp.task('default', ['browser-sync'], function () {
    /* SCSS */
    gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], ['scss'])
        .on('change', function(event) { consoleEventReporter(event); });
    /* JavaScript */
    gulp.watch(['src/javascript/*.js', 'src/javascript/**/*.js'], ['javascript', 'browser-sync-reload'])
        .on('change', function(event) { consoleEventReporter(event); });
    /* HTML */
    gulp.watch(['public/*.html'], ['browser-sync-reload'])
        .on('change', function(event) { consoleEventReporter(event); });
});