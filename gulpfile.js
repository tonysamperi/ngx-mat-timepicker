"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    {join} = require("path"),
    bump = require("gulp-bump")
;

const libName = "ngx-mat-timepicker";
const rootFolder = join(__dirname);
const distFolder = join(rootFolder, `dist/${libName}`);
const doBump = (type) => {
    return Promise.all(["./", join(rootFolder, "projects", libName)].map((p) => {
        return gulp.src(join(p, "package.json"))
        .pipe(bump({type}))
        .pipe(gulp.dest(p));
    }));
};
const taskNames = {
    postBuild: "postBuild",
    copyMDs: "copyMDs"
};

// TASKS

gulp.task("bump:patch", () => {
    return doBump("patch");
});

gulp.task("bump:minor", () => {
    return doBump("minor");
});

gulp.task("bump:major", () => {
    return doBump("major");
});

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
