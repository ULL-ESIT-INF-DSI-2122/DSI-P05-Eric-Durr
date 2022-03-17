import {
  Operable,
  ToNatural,
  ParsableObject,
  ToStringValue,
} from './hexadecimal.interfaces'; // eslint-disable-line

/**
 * # Hexadecimal | Primary Class
 */
export class Hexadecimal implements Operable, ToNatural, ParsableObject, ToStringValue {
  private readonly naturalNum: number;

  constructor(naturalNum: number = 0) {
    this.naturalNum = naturalNum;
  } // eslint-disable-line

  add(objB: Hexadecimal): Hexadecimal {
    return new Hexadecimal(this.naturalNum + objB.valueOf());
  }

  subtract(objB: Hexadecimal): Hexadecimal {
    return new Hexadecimal(this.naturalNum - objB.valueOf());
  }

  valueOf(): number {
    return this.naturalNum;
  }

  toString(): string {
    return `0x${this.naturalNum.toString(16)}`;
  }

  parse(obj: string): number { return +obj; }
}
