import { cleanDir } from '../lib/fs';

function clean() {
  return Promise.all([
    cleanDir('build/*', {
      nosort: true,
      dot: true,
      ignore: ['build/.git', 'build/docs'],
    }),
  ]);
}

export default clean;
