
const gulp = require("gulp");
gulp.task("copy-html", function(){
    return gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

gulp.task("images", function(){
    return gulp.src("*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

//处理js  对于使用框架编写的代码，就不要再进行压缩和合并这些操作
gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//处理数据源
gulp.task("data", function(){
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//一次性执行多个任务
gulp.task("build", ["copy-html", "images", "scripts", "data", "sass"], function(){
    console.log("项目建立成功");
})


//scss
const sass = require("gulp-sass");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sass", function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})



//启动监听
gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("*.{jpg,png}", ["images"]);
    gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch(["*.json", "!package.json"], ["data"]);
    gulp.watch("stylesheet/*.scss", ["sass"]);
})

const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root: "dist",
        port: "8888",
        livereload: true//实时刷新
    })
})

//同时启动任务和服务器
gulp.task("default", ["watch", "server"]);