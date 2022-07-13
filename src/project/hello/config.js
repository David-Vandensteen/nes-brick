export default {
  emulator: {
    file: `${process.env.TEMP}\\hello.nes`,
    executable: 'C:\\Users\\davidv\\Documents\\fceux\\fceux.exe',
  },
  builder: {
    file: 'hello.s',
    executable: 'C:\\cc65\\bin\\cl65',
    params: `--verbose --target nes -o ${process.env.TEMP}\\hello.nes`,
  },
};
