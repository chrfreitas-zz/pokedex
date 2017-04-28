import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import less from 'gulp-less';
import pug from 'gulp-pug';
import del from 'del';
import karma from 'karma';
import jshint from 'gulp-jshint';

gulp.task('js:bundle', () => {

    gulp.start('js:clean');

    gulp.src(['resources/assets/js/**/*.js', '!resources/assets/js/**/*.test.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('bundle.js'))
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

    gulp.src('resources/assets/less/**/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('less:clean', () => {
    del(['public/css/style.css']);
    del.sync(['public/css/style.css']);
});

gulp.task('less:watch', () => {

    gulp.watch('resources/assets/less/**/*.less', ['less:bundle']);

});

gulp.task('lib:bundle', () => {

    gulp.src('lib/angular/angular.min.js')
        .pipe(gulp.dest('public/lib/angular'));

    gulp.src('lib/angular-route/angular-route.min.js')
        .pipe(gulp.dest('public/lib/angular-route'));

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
