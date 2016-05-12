
var gulp = require('gulp');
var gulpLess = require('gulp-less');
var gulpWatch = require('gulp-watch');

function compileLess() {
    gulp.src('css/style.less')
        .pipe(gulpLess())
        .pipe(gulp.dest('css'));
}

function watchLess() {
    compileLess();
    gulpWatch('css/*.less', compileLess);
}

gulp.task('less', compileLess);
gulp.task('less:watch', watchLess);
