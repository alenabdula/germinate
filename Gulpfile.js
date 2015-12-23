/* Helpers */
function consoleEventReporter(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

/* Style */
gulp.task('scss', function() {
  return gulp.src('./src/scss/master.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on( 'error', sass.logError ))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({browsers: ['last 3 versions', '> 5%', 'Firefox ESR']}))
    .pipe(gulp.dest('./public/css/'))
    .pipe(browserSync.reload({ stream: true }))
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

/* Watch */
gulp.task('default', ['browser-sync'], function() {
  /* Style */
  gulp.watch(['./src/scss/*.scss', './src/scss/**/*.scss'], ['scss'])
    .on('change', function(event) { consoleEventReporter(event);});

});