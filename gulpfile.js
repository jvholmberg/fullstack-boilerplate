var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , plumber = require('gulp-plumber')
  , livereload = require('gulp-livereload')
  , sass = require('gulp-sass')
  , webpack = require('webpack-stream');

gulp.task('sass', function () {
  gulp.src('./public/css/*.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.sass', ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee nunjucks',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});
gulp.task('babel', function() {
  return gulp.src('public/js/client.js')
    .pipe(webpack({
      watch: true,
      module: {
        loaders: [{
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
          }
        }]
      },
      output: {
        filename: 'client.bundle.js'
      }
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', [
  'sass',
  'develop',
  'babel',
  'watch'
]);
