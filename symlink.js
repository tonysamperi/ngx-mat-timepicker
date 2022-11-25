const fs = require("fs");
const {join, toNamespacedPath} = require("path");
const pkg = require("./package.json");

(function createSymlink() {
    const v = pkg.version.split(".")[0];
    const nodeModulesPath = join(__dirname, "node_modules");
    const targetPath = join("_node_modules", "node_modules_" + v);
    if (fs.existsSync(nodeModulesPath)) {
        fs.unlinkSync(nodeModulesPath);
    }
    fs.symlink(join(__dirname, targetPath), nodeModulesPath, 'dir', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`Symlink created: /node_modules => /${targetPath}`);
            console.log("Symlink is a directory:",
                fs.statSync(nodeModulesPath).isDirectory()
            );
        }
    });
})();
