/**
 * Omit and Pick
 */

type OmitAndPick = {
  a: string;
  b: number;
  c: boolean;
};

type O = Omit<OmitAndPick, "a">;
type P = Pick<OmitAndPick, "a" | "b">;
