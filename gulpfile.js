"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    {join} = require("path")
;

const libName = "ngx-mat-timepicker";
const rootFolder = join(__dirname);
const distFolder = join(rootFolder, `dist/${libName}`);

const taskNames = {
    postBuild: "postBuild",
    copyMDs: "copyMDs"
};

gulp.task(taskNames.copyMDs, (cb) => {
    logStart(taskNames.copyMDs);
    gulp.src([
        join(rootFolder, "changelog.md"),
        join(rootFolder, "README.md")
    ])
    .pipe(gulp.dest(distFolder));
    logEnd(taskNames.copyMDs);
    cb();
});

// MAIN
gulp.task(taskNames.postBuild, gulp.series(taskNames.copyMDs, function (cb, err) {
    logEnd(taskNames.postBuild);
    cb(err);
}));

