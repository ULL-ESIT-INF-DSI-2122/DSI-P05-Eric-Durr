/**
 * # Operable interface for numbers
 * This interface contains basic operation methods to implement in a class
 */
interface Operable {
  add(objB: object): object;
  subtract(objB: object): object;
  multiply?(objB: object): object;
  divide?(objB: object): object;
}

/**
 * # To Natura number
 * This interface contains a method to extract natural number value of an object
 */
interface ToNatural {
  valueOf(): number;
}

/**
 * # To String Value
 * This interface contains a method to translate into a string the object
 */
interface ToStringValue {
  toString(): string;
}

/**
 * # ParsableObject
 * This interface is ment to translate into a value any string
 */
interface ParsableObject {
  parse(obj: string): number;
}

export {
  Operable,
  ToNatural,
  ToStringValue,
  ParsableObject,
};
