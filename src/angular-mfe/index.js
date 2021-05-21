"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularMfe = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
function angularMfe(_options) {
    return (tree, _context) => {
        const { name } = _options;
        const templateSource = schematics_1.apply(schematics_1.url("./files"), [
            schematics_1.template(Object.assign(Object.assign({}, _options), core_1.strings)),
        ]);
        const merged = schematics_1.mergeWith(templateSource, schematics_1.MergeStrategy.Overwrite);
        const updateMFE = (context) => {
            return () => {
                context.addTask(new tasks_1.NodePackageInstallTask({
                    packageManager: "yarn",
                    workingDirectory: name,
                }), []);
            };
        };
        const updateContainer = (context) => {
            return () => {
                context.addTask(new tasks_1.NodePackageInstallTask({
                    packageManager: "npm",
                    workingDirectory: "container",
                }), []);
            };
        };
        const rule = schematics_1.chain([
            merged,
            updateMFE(_context),
            updateContainer(_context),
        ]);
        return rule(tree, _context);
    };
}
exports.angularMfe = angularMfe;
//# sourceMappingURL=index.js.map