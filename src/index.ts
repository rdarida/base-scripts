import { getPackage } from './utils';

export default function (cwd: string, ...argv: string[]): void {
  console.log(cwd, ...argv);

  console.log('pkg:', JSON.stringify(getPackage(cwd), null, 2));
}
