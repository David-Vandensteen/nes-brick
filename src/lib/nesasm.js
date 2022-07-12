import { spawn } from 'child_process';
import { uid } from 'uid';
import { join } from 'path';
import { writeFileSync } from 'fs';

const { log, error } = console;

export default ({ file, code }) => new Promise((resolve, reject) => {
  let pFile = file;
  if (code) {
    pFile = join(process.env.TEMP, `nesbrick-${uid()}.asm`);
    log('spool asm code into ', pFile);
    try {
      writeFileSync(pFile, code);
    } catch (err) {
      error(err);
    }
  }
  const nesasm = spawn('NESASM3', [pFile]);
  nesasm.stdout.on('data', (data) => {
    log(data.toString());
    if (data.toString().includes('error')) reject(data.toString());
  });
  nesasm.stderr.once('data', (data) => {
    reject(data.toString());
  });
  nesasm.once('close', (exitCode) => {
    if (exitCode === 0) resolve(exitCode);
    reject(exitCode);
  });
});
