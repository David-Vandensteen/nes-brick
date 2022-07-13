import path from 'path';
import builder from '#src/lib/builder';
import { Emulator } from '#src/lib/emulator';

const { parse, join } = path;

const build = ({ configFile }) => {
  const { log, error } = console;

  let config = {};
  import(`../${configFile}`)
    .then((data) => {
      config = { ...data.default };
      log('config', config);
      config.builder.file = `${join(parse(configFile).dir, config.builder.file)}`;
      log('config', config);
      builder(config.builder)
        .then(() => {
          const emulator = new Emulator(config.emulator);
          emulator.start();
        })
        .catch(error);
    });
};

build({ configFile: process.argv[2] });
