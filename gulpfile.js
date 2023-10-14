"use strict";

function logStart(msg) {
    console.info("***** Task '" + msg + "' started *****");
}

function logEnd(msg) {
    console.info("***** Task '" + msg + "' finished *****");
}

const gulp = require("gulp"),
    {join} = require("path"),
    semver = require("semver"),
    log = require("plugin-log"),
    {obj} = require("through2");

const libName = "ngx-mat-timepicker";
const rootFolder = join(__dirname);
const distFolder = join(rootFolder, `dist/${libName}`);

const doBump = (type, identifier) => {
    return Promise.all(["./", join(rootFolder, "projects", libName)].map((p) => {
        return gulp.src(join(p, "package.json"))
        .pipe(obj((file, enc, cb) => {
            const pkgData = JSON.parse(file.contents.toString());
            const prevVersion = pkgData.version;
            pkgData.version = semver.inc(prevVersion, type, identifier);
            file.contents = Buffer.from(JSON.stringify(pkgData, null, 2));
            log(
                "Bumped", log.colors.cyan(prevVersion),
                "to", log.colors.magenta(pkgData.version),
                "with type:", log.colors.cyan(type)
            );
            cb(null, file);
        }))
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

gulp.task("bump:beta", () => {
    return doBump("prerelease", "beta");
});

gulp.task("build++", () => {
    return gulp.src(join(__dirname, "package.json"))
    .pipe(obj((file, enc, cb) => {
        const pkgData = JSON.parse(file.contents.toString());
        const prevBuild = pkgData.build;
        pkgData.build++;
        file.contents = Buffer.from(JSON.stringify(pkgData, null, 2));
        log(
            "Increased", log.colors.cyan(prevBuild),
            "to", log.colors.magenta(pkgData.build)
        );
        cb(null, file);
    }))
    .pipe(gulp.dest(__dirname))
})

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
