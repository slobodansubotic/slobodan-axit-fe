const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const autoprefixer = require('gulp-autoprefixer')

sass.compiler = require('node-sass')

function style () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function serve () {
  browserSync.init({
    server: "./"
  })

  gulp.watch('./sass/**/*.scss', style)
  gulp.watch("*.html").on('change', browserSync.reload)
}

exports.style = style
exports.serve = serve
