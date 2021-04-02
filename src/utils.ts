import { resolve } from 'path';
import { existsSync, readJSONSync } from 'fs-extra';

export function getPackage(cwd: string, options?: { silent: boolean }): any {
  const pkgPath = resolve(cwd, 'package.json');

  if (!existsSync(pkgPath)) {
    if (options?.silent) return {};
  }

  return readJSONSync(pkgPath);
}
