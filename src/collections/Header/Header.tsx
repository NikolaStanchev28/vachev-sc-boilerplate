import * as S from "./elements";

export interface HeaderProps extends HTMLHeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return <S.Header {...props}>header</S.Header>;
};
