import { spawn } from 'child_process';
import { uid } from 'uid';
import { join } from 'path';
import { writeFileSync } from 'fs';

const { log, error } = console;

export default ({ file, code }, { executable, params }) => new Promise((resolve, reject) => {
  let pFile = file;
  if (code) {
    pFile = join(process.env.TEMP || '/tmp', `nesbrick-${uid()}.asm`);
    log('spool asm code into ', pFile);
    try {
      writeFileSync(pFile, code);
    } catch (err) {
      error(err);
    }
  }

  let executableParams;
  if (params === undefined) {
    executableParams = '';
  } else {
    executableParams = params;
  }

  const builder = spawn(executable, [pFile, ...executableParams.split(' ')]);
  log('build ', executable, [pFile, ...executableParams.split(' ')]);

  builder.stdout.on('data', (data) => {
    log(data.toString());
    if (data.toString().includes('error')) reject(data.toString());
  });
  builder.stderr.once('data', (data) => {
    reject(data.toString());
  });
  builder.once('close', (exitCode) => {
    if (exitCode === 0) resolve(exitCode);
    reject(exitCode);
  });
});
