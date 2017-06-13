var gulp = require("gulp");
var del = require("del");
var surge = require('gulp-surge');
var exec = require('child_process').exec;

gulp.task('build-aot', function (cb) {
    exec('ng build --aot --prod', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

gulp.task('clean', function () {
    return del.sync("dist");
});

gulp.task("build", ["clean", "build-aot"]);

gulp.task('deploy', ['build'], function () {
    return surge({
        project: './dist',
        domain: "evsng.surge.sh"
    });
});

gulp.task('deploybuild', function () {
    return surge({
        project: './dist',
        domain: "evsng.surge.sh"
    });
});