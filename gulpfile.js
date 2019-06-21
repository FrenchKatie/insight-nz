const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');


gulp.task('styles', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', gulp.parallel('styles']);
