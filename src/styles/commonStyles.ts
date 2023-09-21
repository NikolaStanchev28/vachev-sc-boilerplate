import { css } from "styled-components";

type CSS = ReturnType<typeof css>;

export interface TypographyStylesProps {
  h1: { regular: CSS };
  h2: { regular: CSS };
  h3: { regular: CSS };
  h4: { regular: CSS };
  h5: { regular: CSS };
  h6: { regular: CSS };
  p: {
    regular: CSS;
  };
}

export const typography: TypographyStylesProps = {
  h1: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  },
  h2: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  },
  h3: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  },
  h4: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  },
  h5: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  },
  h6: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  },
  p: {
    regular: css`
      ${({ theme: { colors, breakpoint } }) => css``}
    `
  }
};
