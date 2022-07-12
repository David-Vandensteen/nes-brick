import nesasm from '#src/lib/nesasm';
import { Fceux } from '#src/lib/fceux';

const { log, error } = console;

const asmFile = 'c:\\temp\\nes\\hello\\helloworld.asm';
const nesFile = 'c:\\temp\\nes\\hello\\helloworld.nes';

nesasm(asmFile)
  .then(() => {
    log('Launch Fceux');
    const fceux = new Fceux({ bin: 'C:\\Users\\davidv\\Documents\\fceux\\fceux.exe' });
    fceux.start(nesFile);
  })
  .catch(error);
