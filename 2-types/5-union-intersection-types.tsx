/**
 * Union and Intersection Types
 */

type X = { hi: string };
type Y = { hi: number };

// Union Types

type XorY = X | Y;

const or1: XorY = { hi: "1" };
const or2: XorY = { hi: 1 };

// Intersection Types

type XandY = X & Y;

const and1: XandY = { hi: "1" };
const and2: XandY = { hi: 1 };


/**
 * Discriminated Union Types
 */

type A = { type: "a"; a: string };
type B = { type: "b"; b: string };

type AorB = A | B;

const a: AorB = { type: "a", a: "a", b: "b" };
const b: AorB = { type: "b", a: "a", b: "b" };
