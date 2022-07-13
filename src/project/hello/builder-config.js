export default {
  file: 'hello.s',
  executable: 'C:\\cc65\\bin\\cl65',
  params: `--verbose --target nes -o ${process.env.TEMP}\\hello.nes`,
};
