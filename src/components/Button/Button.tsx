import * as S from "./elements";
import { forwardRef, ForwardedRef } from "react";

type HTMLButtonProps = JSX.IntrinsicElements["button"];

export interface ButtonProps extends HTMLButtonProps {
  color?: "primary" | "secondary";
  variant?: "default" | "outlined";
  invalid?: boolean;
  ref?: ForwardedRef<HTMLButtonElement>;
}

export const Button = forwardRef(
  (
    { color = "primary", variant = "default", ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return <S.Button {...props} color={color} variant={variant} ref={ref} />;
  }
);
