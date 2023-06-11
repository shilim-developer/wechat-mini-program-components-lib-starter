const gulp = require('gulp');
const replace = require('gulp-replace');
const gulpErrorPath = 'example/utils/gulpError.js';

/** `gulp resetError`
  * 重置gulpError
  * */
exports.resetError = () =>
  gulp
    .src(gulpErrorPath, { base: 'example', allowEmpty: true })
    .pipe(gulp.dest('_example/'));

/** `gulp handleError`
* 输出错误到小程序
* */
exports.handleError = (err) =>
  gulp
    .src(gulpErrorPath, { base: 'example' })
    .pipe(replace('gulpErrorPlaceHolder', err))
    .pipe(gulp.dest('_example/'));
