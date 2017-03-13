var gulp              = require('gulp');
var concat            = require("gulp-concat");
var uglify            = require('gulp-uglify');
var sass              = require('gulp-sass');
var ngHtml2Js         = require("gulp-ng-html2js");
var nodemon           = require("gulp-nodemon");

var postcss           = require('gulp-postcss');
var cssnano           = require('cssnano');
var postcssimport     = require('postcss-easy-import');

var browserSync       = require('browser-sync').create();
var reload            = browserSync.reload;

var Server            = require('karma').Server;

var processors = [];

var EXPRESS_PORT      = 4000;


gulp.task('browsersync', ['nodemon'], function() {
    
    browserSync.init({
      proxy: "http://localhost:8080",
      port: EXPRESS_PORT,
    });

});

gulp.task('js', function () 
{
  gulp.src('./src/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('templates', function () 
{
    gulp.src("./src/**/*.html")
      .pipe(ngHtml2Js({
          moduleName: "templates",
      }))
      .pipe(concat("templates.js"))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  nodemon({
        // the script to run the app
        script: 'server.js',
        // this listens to changes in any of these files/routes and restarts the application
        watch: ["server.js"],
        ext: 'js'
    }).on('start', cb);

});

gulp.task('js-vendor', function () 
{
  gulp.src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/lodash/lodash.js',
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-messages/angular-messages.js',
      './node_modules/angular-password/angular-password.js',
      './node_modules/angular-jwt/dist/angular-jwt.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('css-vendor', function () 
{
  gulp.src('./src/scss/vendor.scss')
    .pipe(sass({}))
    .pipe(postcss([postcssimport,cssnano]))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function () 
{
  gulp.src('./src/scss/styles.scss')
    .pipe(sass({outputStyle: 'expanded', sourceComments:true }))
    .pipe(postcss([]))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('vendor', ['js-vendor','css-vendor']);

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


// Default task that will be run
// when no parameter is provided
// to gulp
gulp.task('default', ['browsersync'],function () {

  gulp.watch(['./src/scss/**/*.scss'], ['css']);
  gulp.watch(['./public/index.html']).on('change', reload);
  gulp.watch(['./src/**/*.html'], ['templates']).on('change', reload);
  gulp.watch(['./src/**/*.js'], ['js']).on('change', reload);

});