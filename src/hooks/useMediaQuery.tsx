import { BreakpointsValuesType, minWidth, maxWidth } from "styles";
import { useState, useEffect, useCallback, useMemo } from "react";

/**
 * @example const { breakpointMatched: isMediumScreenDevice } = useMediaQuery({ type: "max", breakpoint: "M" });
 */
export const useMediaQuery = (query: {
  type: "min" | "max";
  breakpoint: keyof BreakpointsValuesType;
}) => {
  const [breakpointMatched, setBreakpointMatched] = useState(false);

  const mediaQueryHandler = useCallback((event: MediaQueryListEvent) => {
    setBreakpointMatched(event.matches);
  }, []);

  const mediaQuery = useMemo(
    () => (query.type === "max" ? maxWidth[query.breakpoint] : minWidth[query.breakpoint]),
    [query]
  );

  useEffect(() => {
    if (window.matchMedia(mediaQuery).matches) {
      setBreakpointMatched(true);
    }

    window.matchMedia(mediaQuery).addEventListener("change", mediaQueryHandler);

    return () => {
      window.matchMedia(mediaQuery).removeEventListener("change", mediaQueryHandler);
    };
  }, [mediaQueryHandler, mediaQuery]);

  return { breakpointMatched };
};
