/**
 * gulp
 * $ npm install gulp-jshint gulp-concat gulp-uglify gulp-notify gulp-rename --save-dev
 */

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('scripts', function() {
  return gulp.src('ease.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('ease.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(notify({message: 'Scripts task complete'}))
});

gulp.task('default', function() {
  gulp.start('scripts');
});

gulp.task('watch', function() {
  gulp.watch('ease.js', ['scripts']);
  livereload.listen();
  gulp.watch('[dist/**]').on('change', livereload.changed)
});
