import * as S from "./elements";

export interface FooterProps extends HTMLFooterProps {}

export const Footer = ({ ...props }: FooterProps) => {
  return <S.Footer {...props}>footer</S.Footer>;
};
