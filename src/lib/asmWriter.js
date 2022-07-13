/* eslint-disable lines-between-class-members */
import { writeFileSync } from 'fs';

class ASMWriter {
  #ident;
  #code;

  constructor() {
    this.#code = '';
  }

  asm(content) {
    this.#code = this.#code.concat(this.#ident, content, '\n');
    return this;
  }

  get() {
    return this.#code;
  }

  write({ out }) {
    writeFileSync(out, this.#code);
    return this;
  }
}

export default ASMWriter;
export { ASMWriter };
