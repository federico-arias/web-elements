/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');

// Styles 
gulp.task('styles', function() {
  return gulp.src(['src/styles/{*.css,*.scss}', '!src/styles/bootstrap', 'src/styles/includes/*.scss', 'src/styles/exelearning/*'])
    .pipe(sass())
    .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('style.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
});

gulp.task('styles-b', function() {
  return gulp.src(['src/styles/{*.css,*.scss}', 'src/styles/bootstrap/*', 'src/styles/includes/*.scss', '!src/styles/exelearning'])
    .pipe(sass())
    .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('style.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
});

gulp.task('styles-x', function() {
  return gulp.src(['src/styles/{*.css,*.scss}', '!src/styles/bootstrap', 'src/styles/includes/*.scss', 'src/styles/exelearning/*'])
    .pipe(sass())
    .pipe(autoprefixer('last 4 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('style.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'))
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
});

// Images
gulp.task('images', function() {
  return gulp.src(['src/images/**/*.png', 'src/images/*.jpg'])
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/images'))
});

// HTML
gulp.task('html', function() {
  return gulp.src('src/catalog.html')
    .pipe(gulp.dest('dist/'))
  });

// Clean
gulp.task('clean', function(cb) {
    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
});

// Default task
gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'images', 'html');
});

gulp.task('bootstrap', function() {
    gulp.start('styles-b', 'scripts', 'images', 'html');
});

gulp.task('exelearning', function() {
    gulp.start('styles-x', 'scripts', 'images', 'html');
});

// Watch
gulp.task('watch-b', function() {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles-b']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
      
  //Watch HTML
  gulp.watch('src/*.html', ['html']);

  // Create LiveReload server
  //livereload.listen();

  // Watch any files in dist/, reload on change
  //gulp.watch(['dist/**']).on('change', livereload.changed);

});

gulp.task('watch-x', function() {

  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles-x']);

  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
      
  //Watch HTML
  gulp.watch('src/*.html', ['html']);

  // Create LiveReload server
  //livereload.listen();

  // Watch any files in dist/, reload on change
  //gulp.watch(['dist/**']).on('change', livereload.changed);

});
