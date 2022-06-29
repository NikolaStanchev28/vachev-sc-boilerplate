import { forwardRef, ForwardedRef } from "react";
import styled, {
  css,
  FlattenInterpolation,
  ThemedStyledProps,
  DefaultTheme
} from "styled-components";

import { maxMobile } from "~/styles";

import { ButtonProps } from "./Button";

const colorStyles: Record<
  NonNullable<ButtonProps["color"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  primary: css`
    background: linear-gradient(180deg, #ffdb7d 0%, #dea30a 100%);
    &:hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    }
  `,
  secondary: css`
    background: #900101;
    &:hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);
    }
  `
};

const buttonStyles: Record<
  NonNullable<ButtonProps["variant"]>,
  FlattenInterpolation<ThemedStyledProps<ButtonProps, DefaultTheme>>
> = {
  default: css`
    border-radius: 5px;
    max-height: 54px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 14px 0px;
    gap: 10px;
    width: 100%;
    cursor: pointer;
    ${({ color }: ThemedStyledProps<ButtonProps, DefaultTheme>) => color && colorStyles[color]}
    ${({ invalid }: ThemedStyledProps<ButtonProps, DefaultTheme>) =>
      invalid ? "border 2px solid #FF0000" : ""}
  `,
  outlined: css`
    appearance: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 116px;
    height: 46px;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
    }
    @media ${maxMobile} {
      min-width: 80px;
      height: 40px;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      &:hover {
        filter: drop-shadow(-4px -4px 12px rgba(49, 49, 49, 0.5)) drop-shadow(4px 4px 12px #000000);
      }
    }
  `
};

export const Button = styled(
  forwardRef(
    ({ color, variant, invalid, ...props }: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => (
      <button {...props} ref={ref} />
    )
  )
)`
  ${({ variant }) => buttonStyles[variant!]}
`;
