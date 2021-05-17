"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularMfe = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const schema_1 = require("@schematics/angular/ng-new/schema");
function angularMfe(_options) {
    return (tree, _context) => {
        const { name } = _options;
        const generateRepo = (name) => {
            return schematics_1.externalSchematic("@schematics/angular", "ng-new", {
                name,
                version: "11.0.0",
                directory: name,
                routing: true,
                style: "css",
                inlineStyle: false,
                inlineTemplate: false,
                packageManager: schema_1.PackageManager.Yarn,
            });
        };
        const templateSource = schematics_1.apply(schematics_1.url("./files"), [
            schematics_1.template(Object.assign(Object.assign({}, _options), core_1.strings)),
        ]);
        const merged = schematics_1.mergeWith(templateSource, schematics_1.MergeStrategy.Overwrite);
        const updatePackageJson = (context) => {
            return () => {
                context.addTask(new tasks_1.NodePackageInstallTask({
                    packageManager: "yarn",
                    workingDirectory: name,
                }), []);
            };
        };
        const rule = schematics_1.chain([
            generateRepo(name),
            merged,
            updatePackageJson(_context),
        ]);
        return rule(tree, _context);
    };
}
exports.angularMfe = angularMfe;
//# sourceMappingURL=index.js.map