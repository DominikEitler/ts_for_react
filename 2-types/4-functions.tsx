/**
 * Functions
 */

const func1 = (a: number, b: number): number => a + b;

type FuncType = (a: number, b: number) => number;
const func2: FuncType = (a, b) => a + b;

/**
 * Functions with automatic inference
 */

const func3 = (a: number, b: number) => a + b;

const func4 = (a: number, b: string) => a + b;

const func5 = (a: number, b: string) => (a > 2 ? b : null);
