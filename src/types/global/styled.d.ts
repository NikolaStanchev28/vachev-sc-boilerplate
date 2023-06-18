import "styled-components";
import {
  BreakpointValues,
  MaxWidthBreakpointsType,
  MinWidthBreakpointsType,
  TypographyStylesProps
} from "styles";

declare module "styled-components" {
  type Colors = "primary" | "secondary" | "black" | "white" | "vividRed";

  type Gradients = "blueToPurple";

  type Breakpoints = {
    max: MaxWidthBreakpointsType;
    min: MinWidthBreakpointsType;
    val: BreakpointValues;
  };

  export interface DefaultTheme {
    colors: Record<Colors, string>;
    gradients: Record<Gradients, string>;
    typography: TypographyStylesProps;
    breakpoint: Breakpoints;
  }
}
