const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./build'));
}


exports.sass = compilaSass;