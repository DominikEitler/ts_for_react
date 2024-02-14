/**
 * Casting
 */

const canvasFn = (arg: HTMLCanvasElement) => {};

const canvas = document.querySelector("#canvas");

canvasFn(canvas);
canvasFn(canvas as HTMLCanvasElement);
