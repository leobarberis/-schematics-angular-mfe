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
      merged,
      updatePackageJson(_context),
    ]);

    return rule(tree, _context) as Rule;
  };
}
