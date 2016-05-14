"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const jshintReporter = require('jshint-stylish');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const pngquant = require('imagemin-pngquant');
const argv = require('yargs').argv;
const Enviroment = (argv.dev ? argv.dev : 'development');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
console.log(`Working Enviroment: ${Enviroment}!`);

/* ES6 Modules */
gulp.task('rollup', () => {
  let entry   = './src/javascript/master-es6.js';
  let dest    = './public/js/master-es6.js';
  let plugins = [babel()];
  rollup.rollup({ entry, plugins }).then( (bundle) => {
    let format = 'umd'; /* amd, cjs, es6, iife, umd */
    let result = bundle.generate({ format });
    bundle.write({ format, dest });
  });
});

/* Style */
gulp.task('scss', () => {
  let source = './src/scss/master.scss';
  let destination = './public/css/';
  let prefixOptions = { browsers: ['last 3 versions', '> 5%', 'Firefox ESR'] };
  if (Enviroment === 'development') {
    return gulp.src(source)
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'expanded' }).on( 'error', sass.logError ))
      .pipe(autoprefixer(prefixOptions))
      .pipe(sourcemaps.write())
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
gulp.task('javascript', () => {
  let source = [
    './src/javascript/vendor/**/*.js',
    './src/javascript/master.js',
  ];
  let destination = './public/js/';
  if (Enviroment === 'development') {
    return gulp.src(source)
      .pipe(jshint())
      .pipe(jshint.reporter(jshintReporter))
      .pipe(concat('master.js'))
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
gulp.task('images', () => {
  let source = './src/images/**/*';
  let destination = './public/img';
  let minOptions = {
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
gulp.task('browser-sync', () => {
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
gulp.task('browser-sync-reload', () => {
  browserSync.reload();
});

/* Helpers */
function consoleEventReporter(event) {
  console.log(`File ${event.path} was ${event.type}, running tasks...`);
}

/* Watch */
gulp.task('default', ['browser-sync'], () => {

  /* ES6 */
  gulp.watch(['./src/javascript/master-es6.js', './src/javascript/modules/**/*.js'], ['rollup'])
    .on('change', (event) => { consoleEventReporter(event);});

  /* Style */
  gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], ['scss'])
    .on('change', (event) => { consoleEventReporter(event);});

  /* JavaScript */
  gulp.watch(['./src/javascript/*.js', './src/javascript/**/*.js'], ['javascript'])
    .on('change', (event) => { consoleEventReporter(event);});

  /* HTML */
  gulp.watch(['./public/**/*.html', './public/*.html'], ['browser-sync-reload'])
    .on('change', (event) => { consoleEventReporter(event);});
});