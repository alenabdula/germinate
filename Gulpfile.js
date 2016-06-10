"use strict";

const gulp         = require('gulp');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps   = require('gulp-sourcemaps');
const browserSync  = require('browser-sync');
const imagemin     = require('gulp-imagemin');
const changed      = require('gulp-changed');
const rename       = require('gulp-rename');
const pngquant     = require('imagemin-pngquant');
const rollup       = require('rollup');
const buble        = require('rollup-plugin-buble');
const DEV          = true;

/**
 *  Rollup.js Gulp Task for bu
 */
gulp.task('rollup', () => {
  let entry   = './src/js/master.js';
  let dest    = './public/js/master.js';
  let plugins = [ buble(), ];
  rollup.rollup({ entry, plugins }).then( (bundle) => {
    let format = 'umd'; /* amd, cjs, es6, iife, umd */
    let result = bundle.generate({ format });
    bundle.write({ format, dest });
  });
});
/**
 *  Example Gulp task for renaming files
 */
gulp.task('rename:js', () => {
  let source = './public/js/master.js';
  let destination = './public/js';
  return gulp.src(source, { base: process.cwd() })
    .pipe(rename({
      dirname: "",
      basename: "master",
      prefix: "",
      suffix: "-min",
      extname: ".js"
    }))
    .pipe(gulp.dest(destination))
  ;
});
/**
 *  SCSS Default task
 */
gulp.task('scss', () => {
  let source = './src/scss/master.scss';
  let destination = './public/css/';
  let prefixOptions = { browsers: ['last 3 versions', '> 5%', 'Firefox ESR'] };
  if (DEV) {
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
/**
 *  Images Gulp task for optimizing images
 */
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
/**
 *  BrowserSync Gulp task for reloading browser
 */
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
/**
 *  BrowserSync Manual Reload Gulp helper task
 */
gulp.task('browser-sync-reload', () => {
  browserSync.reload();
});
/**
 *  Helper functions
 */
function consoleEventReporter(event) {
  console.log(`File ${event.path} was ${event.type}, running tasks...`);
}
/**
 *  Default Gulp Task
 */
gulp.task('default', ['browser-sync'], () => {
  /**
   *  Rollup.js Module Bundling watch Gulp task
   */
  gulp.watch(['./src/js/master.js', './src/js/modules/**/*.js'], ['rollup', 'browser-sync-reload'])
    .on('change', (event) => { consoleEventReporter(event); });
  /**
   *  SCSS watch Gulp task
   */
  gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], ['scss'])
    .on('change', (event) => { consoleEventReporter(event); });
  /**
   *  HTML watch Gulp task
   */
  gulp.watch(['./public/**/*.html', './public/*.html'], ['browser-sync-reload'])
    .on('change', (event) => { consoleEventReporter(event); });
});