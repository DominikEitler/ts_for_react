/**
 * Example TS
 */

const TSFunction = (
  param1: number,
  param2: number,
  options: { operation: "add" | "subtract" },
): number | null => {
  if (options.operation === "add") {
    return param1 + param2;
  }
  if (options.operation === "subtract") {
    return param1 - param2;
  }
  return null;
};
