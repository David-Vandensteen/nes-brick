import { readFile } from 'fs/promises';
import builder from '#src/lib/builder';

const { log } = console;
log('arg ', process.argv);

readFile(process.argv[2])
  .then((data) => {
    log(JSON.parse(data));
  });
