/**
 * Union and Intersection Types
 */

type X = { hi: string };
type Y = { hi: number };

// Union Types

type XorY = X | Y;
type HiType1 = XorY["hi"]

const or1: XorY = { hi: "1" };
const or2: XorY = { hi: 1 };

// Intersection Types

type XandY = X & Y;
type HiType2 = XandY["hi"]

const and1: XandY = { hi: "1" };
const and2: XandY = { hi: 1 };


/**
 * Discriminating Union Types
 */

type A = { type: "type-A"; a: string };
type B = { type: "type-B"; b: string };

type AorB = A | B;

const a: AorB = { type: "type-A", a: "a", b: "b" };
const b: AorB = { type: "type-B", a: "a", b: "b" };
