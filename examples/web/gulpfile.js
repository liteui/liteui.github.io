const gulp = require('gulp');
const gulpIf = require('gulp-if');
const prettify = require('gulp-jsbeautifier');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const postcss = require('gulp-postcss')
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const debuga = require('debuga');
const autoprefixer = require('autoprefixer');

const isDebug = process.env.NODE_ENV !== 'production';
const miscPath = 'app/static/**/*';



gulp.task('clean', clean);
gulp.task('templates', templates);
gulp.task('styles', styles);
gulp.task('copy', copy);
gulp.task('watch', watch);
gulp.task('server', server);
gulp.task('reload', reload);

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('templates', 'styles', 'copy')
));

gulp.task('default', gulp.series(
  'build',
  'server',
  'watch'
));



function clean() {
  return del('dist');
}

function templates() {
  return gulp.src('app/pug/pages/**/*.pug')
    .pipe(plumber({
      errorHandler: errorHandler('Error in templates task')
    }))
    .pipe(pug({
      doctype: 'html'
    }))
    .pipe(prettify({
      braceStyle: 'expand',
      indentWithTabs: true,
      indentInnerHtml: true,
      preserveNewlines: true,
      endWithNewline: true,
      wrapLineLength: 120,
      maxPreserveNewlines: 50,
      wrapAttributesIndentSize: 1,
    }))
    .pipe(gulp.dest('dist'));
}

function styles() {
  return gulp.src('app/scss/*.scss')
    .pipe(plumber({ errorHandler: errorHandler('Error in styles task') }))
    .pipe(gulpIf(isDebug, sourcemaps.init()))
    .pipe(sass({
      linefeed: 'crlf',
      outputStyle: 'expanded'
    }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulpIf(isDebug, sourcemaps.write()))
    .pipe(gulp.dest('dist/assets/css'));
}

function copy() {
  return gulp
    .src(miscPath, { since: gulp.lastRun('copy') })
    .pipe(newer('dist'))
    .pipe(gulp.dest('dist'));
}

function watch(done) {
  gulp.watch('app/**/*.pug', gulp.series('templates', 'reload'));
  gulp.watch('app/**/*.scss', gulp.parallel('styles'));
  gulp.watch('app/static/**/*', gulp.parallel('copy'));
  done();
}

function server(done) {
  browserSync.init({
    open: true,
    reloadOnRestart: true,
    reloadDebounce: 100,
    port: 80,
    snippetOptions: {
      rules: {
        match: /<\/body>/i,
      },
    },
    server: {
      baseDir: './dist',
    },
    middleware: [debuga()],
  });

  browserSync.watch('dist/assets/**/*').on('change', browserSync.reload);

  done();
}

function reload(done) {
  browserSync.reload();
  done();
}
