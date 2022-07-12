import { spawn } from 'child_process';

const { log } = console;

export default (...args) => new Promise((resolve, reject) => {
  const nesasm = spawn('NESASM3', args);
  nesasm.stdout.on('data', (data) => {
    log(data.toString());
    if (data.toString().includes('error')) reject(data.toString());
  });
  nesasm.stderr.once('data', (data) => {
    reject(data.toString());
  });
  nesasm.once('close', (code) => {
    if (code === 0) resolve(code);
    reject(code);
  });
});
