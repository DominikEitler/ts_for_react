/**
 * Example TS with Inference
 */

const tsFunctionWithInference = (
  param1: number,
  param2: number,
  options: { operation: "add" | "subtract" },
) => {
  if (options.operation === "add") {
    return param1 + param2;
  }
  if (options.operation === "subtract") {
    return param1 - param2;
  }
  return null;
};
