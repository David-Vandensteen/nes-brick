/* eslint-disable lines-between-class-members */
import { spawn } from 'child_process';

class Fceux {
  #bin;
  #process;

  constructor({ bin }) {
    this.#bin = bin;
  }

  start(...args) {
    this.#process = spawn(this.#bin, args);
    return this.#process;
  }

  stop() {
    return this.#process.kill();
  }
}

export default Fceux;
export { Fceux };
