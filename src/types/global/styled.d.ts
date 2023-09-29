import "styled-components";
import {
  BreakpointValues,
  MaxWidthBreakpoints,
  MinWidthBreakpoints,
  TypographyStylesProps
} from "styles";

declare module "styled-components" {
  type Colors = "primary" | "secondary" | "black" | "white" | "vividRed";

  type Gradients = "blueToPurple";

  type Breakpoints = {
    max: MaxWidthBreakpoints;
    min: MinWidthBreakpoints;
    val: BreakpointValues;
  };

  export interface DefaultTheme {
    colors: Record<Colors, string>;
    gradients: Record<Gradients, string>;
    typography: TypographyStylesProps;
    breakpoint: Breakpoints;
  }
}
