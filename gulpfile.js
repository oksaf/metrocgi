var gulp = require('gulp');
var watch = require('gulp-watch');
var fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
	gulp.src(['./partials/skeletons/dashboard.html'])
	.pipe(fileinclude({
	  prefix: '/%',
	  suffix: '%/',
	  basepath: '@file'
	}))
	.pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
	watch('./partials/**/*.html', function () {
		gulp.start('fileinclude');
	});
});