import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const Label = styled("label")`
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
  font-family: "Crimson Text", Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.8;
  margin-left: 0.5em;
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

export const Input = styled("input")`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
`;
