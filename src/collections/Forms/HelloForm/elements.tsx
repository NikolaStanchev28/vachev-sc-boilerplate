import styled, { css } from "styled-components";
import {
  Button as _Button,
  FormInput as _FormInput,
  FormTextArea as _FormTextArea,
  FormCheckbox as _FormCheckbox
} from "components";
import { theme } from "styles";
import { Hideable } from "types";

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  padding: 18px 40px;
  padding-bottom: 36px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
  border-radius: 10px;
  width: 100%;
  max-width: 33.333334%;

  @media (max-width: 991px) {
    flex-direction: column;
    max-width: 100%;
    margin-left: 0;
    padding: 18px 20px;
  }
`;

export const FormInput = styled(_FormInput)`
  margin-bottom: 0.5em;
` as typeof _FormInput;

export const FormTextArea = styled(_FormTextArea)`` as typeof _FormTextArea;

export const FormCheckbox = styled(_FormCheckbox)`` as typeof _FormCheckbox;

export const HeaderText = styled("span")`
  font-family: var(--font-inter);
  font-size: 0.7em;
  letter-spacing: 0.2em;
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 0.4em;
  margin-top: 18px;
  text-transform: uppercase;
`;

export const Title = styled("h2")`
  font-family: var(--font-inter);
  font-size: 1.8em;
  font-weight: 400;
  letter-spacing: -1px;
  line-height: 1.3;
  margin-bottom: 0.4em;
`;

export const Description = styled("p")`
  font-family: var(--font-inter);
  font-size: 1.1em;
  margin-bottom: 1.5em;
`;

export const Actions = styled("div")`
  margin-top: 24px;
`;

export const Button = styled(_Button)``;

export const ErrorMessage = styled("span")`
  color: ${theme.colors.vividRed};
  font-size: 14px;
  margin-left: 10px;
  font-weight: 700;
`;

export const FormError = styled("p")<Hideable>(
  ({ theme: { colors }, $hide }) => css`
    color: ${theme.colors.black};
    margin: 2em 0.5em 1em;
    padding: 0.2em 1em;
    border: 2px solid #ffb900;
    font-family: var(--font-inter);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;

    ${$hide &&
    css`
      display: none;
    `}
  `
);
