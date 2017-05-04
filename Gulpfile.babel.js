import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import less from 'gulp-less';
import del from 'del';
import karma from 'karma';
import jshint from 'gulp-jshint';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import jsmin from 'gulp-jsmin';
import uglifycss from 'gulp-uglifycss';

gulp.task('js:bundle', () => {

    gulp.start('js:clean');

    gulp.src(['resources/assets/js/**/*.js', '!resources/assets/js/**/*.test.js'])
        .pipe(jshint())
        .pipe(sourcemaps.init())
        .pipe(jshint.reporter('default'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('bundle.min.js'))
        .pipe(jsmin())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('js:clean', () => {
    del(['public/js/bundle.js']);
    del.sync(['public/js/bundle.js']);
})

gulp.task('js:watch', () => {
    gulp.watch('resources/assets/js/**/*.js', ['js:bundle']);
});

gulp.task('js:test', () => {

    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();

})

gulp.task('less:bundle', () => {

    gulp.start('less:clean');

    gulp.src('resources/assets/less/main.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concat('style.min.css'))
        .pipe(uglifycss())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('less:clean', () => {
    del(['public/css/style.css']);
    del.sync(['public/css/style.css']);
});

gulp.task('less:watch', () => {

    gulp.watch('resources/assets/less/**/*.less', ['less:bundle']);

});

gulp.task('vendor:bundle', () => {

    gulp.src('vendor/angular/angular.min.js')
        .pipe(gulp.dest('public/vendor/angular'));

    gulp.src('vendor/angular-route/angular-route.min.js')
        .pipe(gulp.dest('public/vendor/angular-route'));
});

gulp.task('all:bundle', () => {

    gulp.start('lib:bundle');
    gulp.start('views:bundle');
    gulp.start('js:bundle');
    gulp.start('less:bundle');

});

gulp.task('all:watch', () => {
    gulp.watch(['app/css/**/*.less, app/js/**/*.js'], ['js:watch', 'css:watch'])
});
