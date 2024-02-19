/**
 * Objects
 */

const obj1: Object = {
  number: 1,
  string: "string",
};

type ObjectType = {
  number: number;
  string: string;
};

const obj2: ObjectType = {
  number: 1,
  string: "string",
};

const numProp: ObjectType["number"] = obj2.number;

/**
 * Optional properties
 */

type OptionalType = {
  optionalProp?: { maybe: string };
};

const obj3: OptionalType = {};

obj3.optionalProp.maybe;
