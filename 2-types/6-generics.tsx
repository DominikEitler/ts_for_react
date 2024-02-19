/**
 * Generics
 */

const x: XorY = { hi: "1" };
const y: XorY = { hi: 1 };

type GenericType<T extends XorY> = { lalala: T["hi"] };

const m: GenericType<X> = { lalala: "1" };
const n: GenericType<X> = { lalala: 1 };

const o: GenericType<Y> = { lalala: "1" };
const p: GenericType<Y> = { lalala: 1 };

/**
 * Generic functions
 */

const fn = <T extends XorY>(param: T): T["hi"] => {
  return param.hi;
};

const fn2 = <T extends XorY>(param: T) => {
  if (typeof param.hi === "string") {
    return param.hi;
  }
  return null;
};

/**
 * Type guards
 */

const isTypeX = (param: XorY): param is X => {
  return typeof param.hi === "string";
};

const fn3 = <T extends XorY>(param: T) => {
  if (isTypeX(param)) {
    return param.hi - 1;
  }
  return param.hi - 1;
};
