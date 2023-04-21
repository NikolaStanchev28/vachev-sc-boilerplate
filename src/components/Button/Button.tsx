import * as S from "./elements";
import { forwardRef } from "react";

export interface ButtonProps extends HTMLButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", ...props }, ref) => {
    return <S.Button {...props} variant={variant} ref={ref} />;
  }
);
