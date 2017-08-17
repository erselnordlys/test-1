
const gulp            = require('gulp');
const del             = require('del');
const autoprefixer    = require('gulp-autoprefixer');
const jslint          = require('gulp-jslint');
const csslint         = require('gulp-csslint');
const uglifyjs        = require('uglify-js');

gulp.task('hello', function () {
    console.log('Hello world')
});


gulp.task('clear-build', function() {
    del.sync('build');
});

gulp.task('build-styles', function () {
    del.sync('build/style');
    gulp.src('style/*.css')
        .pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 10'], { cascade: true }))
        .pipe(csslint( {
            'compatible-vendor-prefixes': false
        }))
        .pipe(csslint.formatter())
        .pipe(gulp.dest('build/style'));
});

gulp.task('build-images', function () {
    del.sync('build/style/images');
    gulp.src('style/images/**/*')
        .pipe(gulp.dest('build/style/images'));
});

gulp.task('build-js', function() {
    del.sync('build/scripts');

    gulp.src('scripts/*.js')
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('build-html', function () {
    del.sync('build/index.html');
    gulp.src('index.html')
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['clear-build', 'build-styles', 'build-images', 'build-js', 'build-html']);