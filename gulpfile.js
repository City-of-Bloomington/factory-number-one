"use strict";

var gulp            = require('gulp'),
    swig            = require('gulp-swig'),
    prettify        = require('gulp-prettify'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    sassOpts        = {
        errLogToConsole: true
    },
    swigOpts        = {
        defaults: {
            cache: false
        },
        data: {
            'page': {}
        }
    };

gulp.task('build-html', function() {
    gulp.src('./src/index.html')
        .pipe(swig(swigOpts))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest('./build/'));


    gulp.src('./src/themes/*/*.html')
        .pipe(swig(swigOpts))
        .pipe(prettify({indent_size: 4}))
        .pipe(gulp.dest('./build/themes/'));
});

gulp.task('build-default-sass', function() {
    gulp.src('./src/themes/default/scss/default.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOpts))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('build-kirkwood-sass', function() {
    gulp.src('./src/themes/kirkwood/scss/kirkwood.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOpts))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/assets/css'));
});
/*
gulp.task('build-info-sass', function() {
    gulp.src('./src/themes/info/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOpts))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('build-geospatial-sass', function() {
    gulp.src('./src/themes/geospatial/scss/geospatial.scss')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOpts))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/assets/css'));
});
*/

// Run the first build, or re-build assets after cleaning files
gulp.task('build', ['build-default-sass', 'build-kirkwood-sass', 'build-html'], function() {
    gulp.src('./src/static/**/*.*')
        .pipe(gulp.dest('./build/assets/'));

    gulp.src('./src/themes/kirkwood/img/*.*')
        .pipe(gulp.dest('./build/assets/kirkwood/img/'));

    /*
    gulp.src('./src/themes/info/img/*.*')
        .pipe(gulp.dest('./build/assets/info/img/'));

    gulp.src('./src/themes/geospatial/img/*.*')
        .pipe(gulp.dest('./build/assets/geospatial/img/'));
    */

    gulp.src('./src/logo.svg')
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['build'], function () { gulp.src('./gulfile.js'); });
