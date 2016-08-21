var gulp = require("gulp");
var sass = require("gulp-sass");
var topsass = require("gulp-sass");
var notify  = require('gulp-notify');

gulp.task("default", function() {
    gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("sass/**/*.scss",["sass"]);
    gulp.watch("topsass/**/*.scss",["topsass"]);
});

var plumber = require("gulp-plumber");
 
 
gulp.task("sass", function() {
    gulp.src("sass/**/*.scss")
    	.pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(gulp.dest("htdocs/assets/css/"))
});
gulp.task("topsass", function() {
    gulp.src("topsass/**/*.scss")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(gulp.dest("htdocs/css/"))
});

