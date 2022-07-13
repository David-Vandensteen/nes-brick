import path from 'path';
import builder from '#src/lib/builder';

const { parse, join } = path;

const build = ({ configFile }) => {
  const { log, error } = console;

  let config = {};
  import(`../${configFile}`)
    .then((data) => {
      config = { ...data.default };
      log('config', config);
      config.file = `${join(parse(configFile).dir, config.file)}`;
      log('config', config);
      builder(config)
        .catch(error);
    });
};

build({ configFile: process.argv[2] });
