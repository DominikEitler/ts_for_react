/**
 * Example JS
 */

const jsFunction = (
  param1,
  param2,
  options
) => {
  if (options.operation === "add") {
    return param1 + param2;
  }
  if (options.operation === "subtract") {
    return param1 - param2;
  }
  return null;
};
