import styled from "styled-components";
import type { FormTextAreaProps } from "./TextArea";

export const Container = styled("div")``;

export const InputWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled("label")`
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  font-family: "Crimson Text", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 0.2em;
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

export const TextArea = styled("textarea")`
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: unset;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  background: transparent;
  padding: 0.8em;

  font-family: "Playfair Display", Arial, sans-serif;
  font-size: 0.8em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
    box-shadow: 0 0 4px 0 ${({ theme }) => theme.colors.primary};
  }

  transition: border 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
`;
