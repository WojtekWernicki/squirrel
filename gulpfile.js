const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');

sass.compiler = require('node-sass');

function css() {
  return src('src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(dest('dist/styles'));
}

exports.css = css;
exports.default = function() {
  watch('src/styles/**/*.scss', css);
}
