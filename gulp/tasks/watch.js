var gulp            = require('gulp'),
    watch           = require('gulp-watch'),
    browserSync     = require('browser-sync').create();

gulp.task('watch', function(){

    watch('./app/index.html', function(){

        browserSync.reload();
        // gulp.start('html');

    });

    watch('./app/assets/styles/**/*.css', function(){

        gulp.start('cssInject');
        // gulp.start('styles');

    });

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
});



gulp.task('cssInject', ['styles'], function () {
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browserSync.stream());
});
