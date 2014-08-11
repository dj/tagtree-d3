var gulp = require('gulp'),
  connect = require('gulp-connect'),
  traceur = require('gulp-traceur'),
  sass = require('gulp-ruby-sass');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 8005
  });
});

gulp.task('reload', function () {
  gulp.src('./*.*')
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('traceur', function(){
  gulp.src('./scripts/*.js')
      .pipe(traceur())
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function () {
  gulp.watch(['./*.*'], ['reload']);
  gulp.watch(['./scripts/*.js'], ['traceur']);
  gulp.watch(['./sass/*.scss'], ['sass']);
});

gulp.task('default', ['connect', 'watch', 'traceur', 'sass']);