const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('watch', function () {
	gulp.watch('./**/*.scss', ['styles']);
});
gulp.task('watch', () => {
	gulp.watch('scss/**/*.scss', (done) => {
		gulp.series(['styles'])(done);
	});
});

gulp.task('default', gulp.parallel('styles'));