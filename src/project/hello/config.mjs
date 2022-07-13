export default {
  emulator: {
    file: `${process.env.TEMP}\\hello.nes`,
    executable: `${process.env.TEMP}\\nes-brick\\fceux.exe`,
  },
  builder: {
    file: 'hello.s',
    executable: `${process.env.TEMP}\\nes-brick\\bin\\cl65`,
    params: `--verbose --target nes -o ${process.env.TEMP}\\hello.nes`,
  },
};
