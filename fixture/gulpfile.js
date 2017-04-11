var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function() {
  return gulp.src('src/sass/course.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css/'))
})

gulp.task('autocss', function() {
  gulp.watch('./src/sass/*.scss', ['css'])
})

gulp.task('default', ['css', 'autocss'])
