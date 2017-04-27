import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import less from 'gulp-less';
import pug from 'gulp-pug';
import karma from 'gulp-karma';
import del from 'del';


// tarefas para todos os js da aplicacao
gulp.task('js:bundle', () => {

    gulp.start('js:clean');

    gulp.src('resources/assets/js/**/*.js')
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

// tarefa para todos os css da aplicacao
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

// tarefa para compilar as views
gulp.task('views:bundle', () => {

    return gulp.src('resources/views/masterpage.pug')
               .pipe(pug({
                   filename: 'teste.html'
               }))
});

// tarefa de teste unitario
gulp.task('test', () => {
    return gulp.src('public/js/*.js')
               .pipe(karma({
                   configFile: 'karma.conf.js',
                   action: 'run'
               }))
               .on('error', function(err) {
                   console.log(err);
               });
})

// tarefa de publicacao
gulp.task('deploy', () => {

});

// tarefa para rodar todas as tarefas anteriores
gulp.task('all:watch', () => {
    gulp.watch(['app/css/**/*.less, app/js/**/*.js'], ['js:watch', 'css:watch'])
});
