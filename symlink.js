const fs = require("fs");
const {join} = require("path");
const pkg = require("./package.json");

(function createSymlink() {
    const v = pkg.version.split(".")[0];
    const nodeModulesPath = join(__dirname, "node_modules");
    if (fs.existsSync(nodeModulesPath)) {
        fs.unlinkSync(nodeModulesPath);
    }
    fs.symlink(join(__dirname, "_node_modules", "node_modules_" + v), nodeModulesPath, 'dir', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Symlink created");
            console.log("Symlink is a directory:",
                fs.statSync(nodeModulesPath).isDirectory()
            );
        }
    });
})();
