/**
 * Created by antoinefloris on 02/05/2017.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');



//task

gulp.task('sass', function(){
    gulp.src('dist/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css/'))
});


gulp.task('watch', function (){
    gulp.watch('dist/scss/style.scss', ['sass']);
});

//default

gulp.task('default', ['watch']);