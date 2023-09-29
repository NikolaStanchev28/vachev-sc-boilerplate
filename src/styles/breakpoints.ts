import { objectKeys } from "utils";

export type Breakpoint = "S" | "M" | "L" | "XL" | "XXL";

export type BreakpointValues = Record<Breakpoint, number>;

type MaxWidthMediaQuery = `(max-width: ${number}px)`;
type MinWidthMediaQuery = `(min-width: ${number}px)`;

export type MinWidthBreakpoints = Record<Breakpoint, MinWidthMediaQuery>;
export type MaxWidthBreakpoints = Record<Breakpoint, MaxWidthMediaQuery>;

export const breakpoints: BreakpointValues = {
  S: 599,
  M: 899,
  L: 1199,
  XL: 1499,
  XXL: 2559
};

export const maxWidth = objectKeys(breakpoints).reduce((acc, key) => {
  acc[key] = `(max-width: ${breakpoints[key]}px)`;
  return acc;
}, {} as MaxWidthBreakpoints);

export const minWidth = objectKeys(breakpoints).reduce((acc, key) => {
  acc[key] = `(min-width: ${breakpoints[key]}px)`;
  return acc;
}, {} as MinWidthBreakpoints);
