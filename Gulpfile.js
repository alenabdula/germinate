/* Environment: development | production */
var Enviroment = 'development';

/* Modules */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var pngquant = require('imagemin-pngquant');

/* Style */
gulp.task('scss', function() {
  var source = './src/scss/master.scss';
  var destination = './public/css/';
  var prefixOptions = { browsers: ['last 3 versions', '> 5%', 'Firefox ESR'] };
  if (Enviroment === 'development') {
    return gulp.src(source)
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'expanded' }).on( 'error', sass.logError ))
      .pipe(sourcemaps.write())
      .pipe(autoprefixer(prefixOptions))
      .pipe(gulp.dest(destination))
      .pipe(browserSync.reload({ stream: true }))
    ;
  }
  else {
    return gulp.src(source)
      .pipe(sass({ outputStyle: 'compressed' }).on( 'error', sass.logError ))
      .pipe(autoprefixer(prefixOptions))
      .pipe(gulp.dest(destination))
    ;
  }
});

/* JavaScript */
gulp.task('javascript', function() {
  var source = [
    './src/javascript/vendor/**/*.js',
    './src/javascript/master.js',
  ];
  var destination = './public/js/';
  if (Enviroment === 'development') {
    return gulp.src(source)
      .pipe(concat('master.js'))
      .pipe(jshint())
      .pipe(jshint.reporter(jshintReporter))
      .pipe(gulp.dest(destination))
    ;
  }
  else {
    return gulp.src(source)
      .pipe(concat('master.js'))
      .pipe(uglify())
      .pipe(gulp.dest(destination))
    ;
  }
});

/* Images */
gulp.task('images', function() {
  var source = './src/images/**/*';
  var destination = './public/img';
  var minOptions = {
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }
  return gulp.src(source)
    .pipe(changed(destination))
    .pipe(imagemin(minOptions))
    .pipe(gulp.dest(destination))
  ;
});

/* BrowserSync */
gulp.task('browser-sync', function() {
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
gulp.task('browser-sync-reload', function() {
  browserSync.reload();
});

/* Helpers */
function consoleEventReporter(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

/* Watch */
gulp.task('default', ['browser-sync'], function() {
  /* Style */
  gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], ['scss'])
    .on('change', function(event) { consoleEventReporter(event);});

  /* JavaScript */
  gulp.watch(['./src/javascript/*.js', './src/javascript/**/*.js'], ['javascript'])
    .on('change', function(event) { consoleEventReporter(event);});
});