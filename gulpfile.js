var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 静态服务器
gulp.task('server', function () {
    browserSync.init({
        // files: ['./dist/**/*.html'],
        server: {
            baseDir: "./dist"
        },
        port: 8090, //设置browser-sync的运行端口号
        browser: 'chrome',
    }, function () {
        console.log('浏览器已刷新')
    });

});
