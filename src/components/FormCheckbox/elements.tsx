import styled from "styled-components";
import type { FormCheckboxProps } from "./FormCheckbox";

export const Container = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const Label = styled("label")`
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  font-family: "Crimson Text", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  margin-left: 5px;
`;

export const ErrorText = styled("p")`
  color: ${({ theme }) => theme.colors.vividRed};
  white-space: nowrap;
  font-family: "Crimson Text", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 5px;
  margin: 0;
`;

export const Input = styled("input")<FormCheckboxProps>`
  width: 20px;
  height: 20px;
`;
