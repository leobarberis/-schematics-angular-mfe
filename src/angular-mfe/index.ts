import { strings } from "@angular-devkit/core";
import {
  template,
  apply,
  externalSchematic,
  MergeStrategy,
  mergeWith,
  Rule,
  SchematicContext,
  Tree,
  url,
  chain,
} from "@angular-devkit/schematics";
import { Schema } from "./schema";
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";
import { PackageManager } from "@schematics/angular/ng-new/schema";

export function angularMfe(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name } = _options;
    const generateRepo = (name: string) => {
      return externalSchematic("@schematics/angular", "ng-new", {
        name,
        version: "11.0.0",
        directory: name,
        routing: true,
        style: "css",
        inlineStyle: false,
        inlineTemplate: false,
        packageManager: PackageManager.Yarn,
      });
    };
    const templateSource = apply(url("./files"), [
      template({ ..._options, ...strings }),
    ]);
    const merged = mergeWith(templateSource, MergeStrategy.Overwrite);
    const updatePackageJson = (context: SchematicContext) => {
      return () => {
        context.addTask(
          new NodePackageInstallTask({
            packageManager: "yarn",
            workingDirectory: name,
          }),
          []
        );
      };
    };
    const rule = chain([
      generateRepo(name),
      merged,
      updatePackageJson(_context),
    ]);

    return rule(tree, _context) as Rule;
  };
}
