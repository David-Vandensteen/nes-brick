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

  bank(data) {
    this.asm(`.bank ${data}`);
    return this;
  }

  BNE(data) {
    this.asm(`BNE ${data}`);
    return this;
  }

  BIT(data) {
    this.asm(`BIT ${data}`);
    return this;
  }

  BPL(data) {
    this.asm(`BPL ${data}`);
    return this;
  }

  CPX(data) {
    this.asm(`CPX ${data}`);
    return this;
  }

  CLD() {
    this.asm('CLD');
    return this;
  }

  db(...data) {
    this.asm(`.db ${data}`);
  }

  dw(data) {
    this.asm(`.dw ${data}`);
    return this;
  }

  get() {
    return this.#code;
  }

  inesprg(data) {
    this.asm(`.inesprg ${data}`);
    return this;
  }

  ineschr(data) {
    this.asm(`.ineschr ${data}`);
    return this;
  }

  inesmap(data) {
    this.asm(`.inesmap ${data}`);
    return this;
  }

  inesmir(data) {
    this.asm(`.inesmir ${data}`);
    return this;
  }

  ident(str) {
    this.#ident = str;
    return this;
  }

  incbin(data) {
    this.asm(`.incbin ${data}`);
    return this;
  }

  INX() {
    this.asm('INX');
    return this;
  }

  JSR(data) {
    this.asm(`JSR ${data}`);
    return this;
  }

  LDA(data) {
    this.asm(`LDA ${data}`);
    return this;
  }

  LDX(data) {
    this.asm(`LDX ${data}`);
    return this;
  }

  org(data) {
    this.asm(`.org ${data}`);
    return this;
  }

  RTI() {
    this.asm('RTI');
    return this;
  }

  RTS() {
    this.asm('RTS');
    return this;
  }

  rsset(data) {
    this.asm(`.rsset ${data}`);
    return this;
  }

  SEI() {
    this.asm('SEI');
    return this;
  }

  STA(a, b) {
    this.asm(`LDA ${a}, ${b}`);
    return this;
  }

  STX(data) {
    this.asm(`STX ${data}`);
    return this;
  }

  TXS() {
    this.asm('TXS');
    return this;
  }

  write({ out }) {
    writeFileSync(out, this.#code);
    return this;
  }
}

export default ASMWriter;
export { ASMWriter };
