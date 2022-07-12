import nesasm from '#src/lib/nesasm';

const { log, error } = console;

nesasm('c:\\temp\\nes\\empty.asm')
  .then(() => {
    log('NESASM COMPLETE');
  })
  .catch(error);
