/**
 * Generics
 */

const x: XorY = { hi: "1" };
const y: XorY = { hi: 1 };

type Generic<T extends XorY> = { lala: T["hi"] };

const m: Generic<X> = { lala: "1" };
const n: Generic<X> = { lala: 1 };

const o: Generic<Y> = { lala: "1" };
const p: Generic<Y> = { lala: 1 };

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
