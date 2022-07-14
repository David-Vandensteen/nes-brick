export default {
  emulator: {
    file: `${process.env.TEMP}\\hello.nes`,
    executable: `${process.env.TEMP}\\nes-brick\\fceux\\fceux.exe`,
  },
  builder: {
    file: 'hello.s',
    executable: `${process.env.TEMP}\\nes-brick\\cc65\\bin\\cl65`,
    params: `--verbose --target nes -o ${process.env.TEMP}\\hello.nes`,
  },
};
