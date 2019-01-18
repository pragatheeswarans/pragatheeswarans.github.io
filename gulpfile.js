var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');
gulp.task('sass', function() {
    return gulp.src('assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});
