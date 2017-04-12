var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cssnano = require('gulp-cssnano')
var uglify = require('gulp-uglify')

gulp.task('css', function() {
  return gulp.src('src/sass/course.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('autocss', function() {
  gulp.watch('./src/sass/*.scss', ['css'])
})

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
})

gulp.task('autojs', function() {
  gulp.watch('src/js/*.js', ['js'])
})

gulp.task('default', ['css', 'autocss', 'js', 'autojs'])
