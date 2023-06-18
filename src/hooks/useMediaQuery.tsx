import { minWidth, maxWidth, Breakpoint } from "styles";
import { useState, useEffect } from "react";

/**
 * @example const [isMediumScreenDevice] = useMediaQuery({ type: "max", breakpoint: "M" });
 */
export const useMediaQuery = (query: { type: "min" | "max"; breakpoint: Breakpoint }) => {
  const [breakpointMatched, setBreakpointMatched] = useState(false);

  const mediaQuery = query.type === "max" ? maxWidth[query.breakpoint] : minWidth[query.breakpoint];

  useEffect(() => {
    const controller = new AbortController();
    const mediaQueryHandler = (event: MediaQueryListEvent) => {
      setBreakpointMatched(event.matches);
    };

    if (window.matchMedia(mediaQuery).matches) {
      setBreakpointMatched(true);
    }

    window
      .matchMedia(mediaQuery)
      .addEventListener("change", mediaQueryHandler, { signal: controller.signal });

    return () => controller.abort();
  }, [mediaQuery]);

  return [breakpointMatched];
};
