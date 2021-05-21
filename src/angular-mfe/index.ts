import { strings } from "@angular-devkit/core";
import {
  template,
  apply,
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

export function angularMfe(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name } = _options;
    const templateSource = apply(url("./files"), [
      template({ ..._options, ...strings }),
    ]);
    const merged = mergeWith(templateSource, MergeStrategy.Overwrite);
    const updateMFE = (context: SchematicContext) => {
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
    const updateContainer = (context: SchematicContext) => {
      return () => {
        context.addTask(
          new NodePackageInstallTask({
            packageManager: "npm",
            workingDirectory: "container",
          }),
          []
        );
      };
    };
    const rule = chain([
      merged,
      updateMFE(_context),
      updateContainer(_context),
    ]);

    tree.create(
      ".gitignore",
      "**/node_modules\n**/dist\ncdn/public\npackage-lock.json"
    );

    return rule(tree, _context) as Rule;
  };
}
