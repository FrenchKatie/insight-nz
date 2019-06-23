const gulp = require('gulp');
const sass = require('gulp-sass');


gulp.task('styles', () => {
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});