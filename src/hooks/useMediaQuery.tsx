import { useState, useEffect } from "react";
import { BreakpointValues, minWidth, maxWidth } from "styles";
import { kv } from "utils";

type MediaQueryType = "min" | "max";
type MediaQueryBreakpoint = keyof BreakpointValues;

/**
 * @example const { maxM } = useMediaQuery({ type: "max", breakpoint: "M" });
 */
export const useMediaQuery = <T extends MediaQueryType, B extends MediaQueryBreakpoint>(query: {
  type: T;
  breakpoint: B;
}) => {
  const [breakpointMatched, setBreakpointMatched] = useState(false);

  const mediaQuery = query.type === "max" ? maxWidth[query.breakpoint] : minWidth[query.breakpoint];

  useEffect(() => {
    const mediaQueryHandler = (event: MediaQueryListEvent) => {
      setBreakpointMatched(event.matches);
    };

    if (window.matchMedia(mediaQuery).matches) {
      setBreakpointMatched(true);
    }

    window.matchMedia(mediaQuery).addEventListener("change", mediaQueryHandler);

    return () => {
      window.matchMedia(mediaQuery).removeEventListener("change", mediaQueryHandler);
    };
  }, [mediaQuery]);

  return kv(`${query.type}${query.breakpoint}`, breakpointMatched);
};
