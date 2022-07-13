import nodemon from 'nodemon';

const { log, error } = console;

log('args', process.argv);
if (!process.argv[2]) {
  error('this script can t be call without argument');
  process.exit(1);
}

nodemon({ script: 'src/buildASM.js', args: [process.argv[2]], ext: 's' }).on('start', () => {
  log('nodemon started');
}).on('crash', () => {
  log('script crashed for some reason');
});

nodemon.emit('restart');
nodemon.emit('quit');
