const gulp = require("gulp");
const source = require("vinyl-source-stream");
const browserify = require("browserify");
const connect = require("gulp-connect");
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function(done) {
  gulp.src('app/scss/app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(minifyCss({ keepSpecialComments: 0}))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css/'))
    .on('end', done);
});


gulp.task('connect', function() {
	connect.server({
		root:'',
		port: '9000',
	});
});

gulp.task('browserify', function() {
	return browserify('app/app.js')
		.bundle()
		.pipe(source('main.js'))
      	.pipe(ngAnnotate())
      	.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['connect', 'watch']);