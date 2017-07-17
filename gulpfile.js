'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    cp          = require('child_process'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    sass        = require('gulp-sass'),
    maps        = require('gulp-sourcemaps'),
    cleanCss    = require('gulp-clean-css'),
    del         = require('del'),
    reload      = browserSync.reload;

/***************************
******  Trackerkeeper  *****
***************************/

gulp.task("concatTkScripts", function() {
    return gulp.src([
        // Vendor
        "trackerkeeper/vendor/angular_1.2.13/angular.min.js",
        "trackerkeeper/vendor/angular_1.2.13/angular-route.min.js",
        "trackerkeeper/vendor/angular_1.2.13/angular-animate.min.js",
        "trackerkeeper/vendor/angular_1.2.13/ngStorage.min.js",
        "trackerkeeper/node_modules/ngtouch/build/ngTouch.min.js",
        "trackerkeeper/node_modules/angular-ui-router/release/angular-ui-router.min.js",

        "trackerkeeper/scripts/app.js",
        // Controllers
        "trackerkeeper/scripts/controllers/main.js",
        "trackerkeeper/scripts/controllers/home.js",
        "trackerkeeper/scripts/controllers/new.js",
        "trackerkeeper/scripts/controllers/list.js",
        "trackerkeeper/scripts/controllers/input.js",
        "trackerkeeper/scripts/controllers/output.js",
        "trackerkeeper/scripts/controllers/detail.js",

        "trackerkeeper/scripts/services/project.js"])

    .pipe(maps.init())
    .pipe(concat("tkGlobal.js"))
    .pipe(maps.write('./'))
    .pipe(gulp.dest("trackerkeeper/dest/scripts"));
});

/**
 * minifyTkScripts is currently not in use - minification breaks the world
 */
// gulp.task('minifyTkScripts', ['concatTkScripts'], function() {
//     return gulp.src('trackerkeeper/scripts/tkGlobal.js')
//     .pipe(uglify())
//     .pipe(rename('tkGlobal.min.js'))
//     .pipe(gulp.dest('trackerkeeper/dest/scripts'));
// });

gulp.task('compileTkSass', function() {
    return gulp.src('trackerkeeper/styles/scss/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('trackerkeeper/styles/css'));
});

gulp.task("minifyTkSass", ['compileTkSass'], function() {
    return gulp.src('trackerkeeper/styles/css/style.css')
    .pipe(cleanCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('trackerkeeper/dest/styles'));
});

/***************************
******    Main site    *****
***************************/

gulp.task("minifyMainScripts", function() {
    return gulp.src('scripts/global.js')
    .pipe(maps.init())
    .pipe(uglify())
    .pipe(rename('mainGlobal.min.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('dest/scripts'));
});

gulp.task('compileMainSass', function() {
    return gulp.src('_sass/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(rename('mainStyle.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream: true}));
});

gulp.task("minifyMainSass", ['compileMainSass'], function() {
    return gulp.src('css/mainStyle.css')
    .pipe(cleanCss())
    .pipe(rename('mainStyle.min.css'))
    .pipe(gulp.dest('dest/styles'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browserSync', ['jekyll-build'], function() {
    browserSync.init({
        server: {
            baseDir: '_site'
        },
        host: "localhost"
    });
});

/**
 * Separate TK gulp commands
 */
gulp.task('cleanTk', function() {
    del(['trackerkeeper/dest/styles/*']);
    del(['trackerkeeper/dest/scripts/*']);
});
gulp.task('concatTk', ['concatTkScripts']);    // compile our scripts
gulp.task('minTk', ['minifyTkSass']); // compress our styles
gulp.task('buildTk', ['cleanTk', 'concatTk', 'minTk']); // get it all ready for production

/**
 * Main site gulp commands
 */
 gulp.task('cleanMain', function() {
     del(['./dest/css/*']);
     del(['./dest/scripts/*']);
 });
 gulp.task('minMain', ['minifyMainSass', 'minifyMainScripts']); // compress our scripts & styles
 gulp.task('buildMain', ['cleanMain', 'minMain']);  // get it all ready for production

/**
 * Generic all around tasks
 */

 gulp.task('watch', function() {
     gulp.watch(['_sass/**/*.scss', 'trackerkeeper/styles/scss/**/*.scss'], ['compileTkSass', 'minifyTkSass', 'compileMainSass', 'minifyMainSass',]);
 });

 gulp.task('default', ['buildTk', 'buildMain', 'watch', 'browserSync'], function (){
     // Run our main tasks for compliling, minifying, cleaning, & browser syncing.
 });
