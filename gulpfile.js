const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/styles'));
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

exports.default = gulp.parallel(compilaSass, scripts);
exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(compilaSass));
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
}