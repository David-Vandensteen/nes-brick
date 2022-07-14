import { mkdirSync, existsSync } from 'fs';
import download from 'download';
import pAll from 'p-all';

const { log } = console;

const downloadAndExtract = ({ url, dest }) => {
  log('url :', url);
  log('dest :', dest);
  log('');
  if (existsSync(dest)) {
    log(dest, 'already exist');
    log('download is skipped');
    log('');
    return Promise.resolve();
  }
  mkdirSync(dest, { recursive: true });
  return download(url, dest, { extract: true });
};

const start = () => pAll([
  () => downloadAndExtract({ url: 'https://downloads.sourceforge.net/project/cc65/cc65-snapshot-win32.zip', dest: `${process.env.TEMP}\\nes-brick\\cc65` }),
  () => downloadAndExtract({ url: 'https://downloads.sourceforge.net/project/fceultra/Binaries/2.6.4/fceux-2.6.4-win32.zip', dest: `${process.env.TEMP}\\nes-brick\\fceux` }),
], { concurrency: 1 });

start();
