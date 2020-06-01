const gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload, //刷新
    notify = require('gulp-notify'), //提示
    concat = require('gulp-concat'), //合并
    cleancss = require('gulp-clean-css'), //css压缩
    imagemin = require('gulp-imagemin'), //图片压缩
    uglify = require('gulp-uglify'), //js压缩
    babel = require('gulp-babel'),
    changed = require('gulp-changed'), //改变判断
    vinylPaths = require('vinyl-paths'),
    del = require('del');
//js
gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(changed('./src/js/*.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('../html/res/js'))
        .pipe(reload({ stream: true }))
        .pipe(notify('压缩js [<%= file.relative %>]'))
});

//less
gulp.task('less', function() {
    gulp.src('./src/css/*.less')
        .pipe(changed('./src/css/*.less'))
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
        .pipe(reload({ stream: true }))
        .pipe(notify('编译 less -> css [<%= file.relative %>]'))
});

gulp.task('concat', function() {
    gulp.src(['./src/css/*.css'])
        .pipe(concat('index.css'))
        .pipe(cleancss())
        .pipe(gulp.dest('../html/res/css'))
        .pipe(reload({ stream: true }))
        .pipe((notify('合并css [<%= file.relative %>]')))
});

gulp.task('images', function() {
    gulp.src('./src/img/*.*')
        .pipe(changed('./src/img/*.*'))
        .pipe(imagemin())
        .pipe(gulp.dest('./src/img/out'))
        .pipe(gulp.dest('../html/res/img'))
        .pipe(reload({ stream: true }))
        .pipe((notify('图片压缩 [<%= file.relative %>]')));
    gulp.src('./src/img/*.*')
        .pipe(vinylPaths(del));
});

// 静态服务器
gulp.task('default', ['images', 'less', 'concat', 'js'], function() {
    browserSync.init({
        server: {
            baseDir: "../html"
        },
        port: 8888
    });
    gulp.watch("src/css/developer/*.less", ['less']);
    gulp.watch("src/css/*.css", ['concat', 'images']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("../html/*.html").on('change', reload);
});
