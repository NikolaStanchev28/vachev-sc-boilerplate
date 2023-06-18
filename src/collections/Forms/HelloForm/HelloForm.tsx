import * as S from "./elements";
import { useState } from "react";
import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { helloSchema } from "schemas";
import type { HelloRequest, HelloResponse } from "pages/api/hello";
import { useZodForm } from "hooks";

export interface HelloFormProps extends HTMLFormProps {}

export const HelloForm = ({ ...props }: HelloFormProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, resetField } = useZodForm(helloSchema, { agreeToTOS: true });

  const submitHandler = handleSubmit(async ({ userName, agreeToTOS }) => {
    try {
      const response = await axios.post<
        HelloResponse,
        AxiosResponse<HelloResponse>,
        HelloRequest["body"]
      >("/api/hello", { userName, agreeToTOS });

      setSuccessfulSubmit(true);
      setMessage(response.data.message);

      setTimeout(() => {
        setSuccessfulSubmit(false);
        setMessage(null);
        resetField("userName");
        resetField("agreeToTOS");
      }, 5000);
    } catch (error: any) {
      setError(isAxiosError(error) ? error.response?.data.error : error.message);
      console.warn(isAxiosError(error) ? error.response?.data.error : error.message);
    }
  });

  return (
    <S.Form {...props} onSubmit={submitHandler}>
      {successfulSubmit ? (
        <S.Title>{message}</S.Title>
      ) : (
        <>
          <S.HeaderText>hello form</S.HeaderText>

          <S.Title>Contact Us</S.Title>

          <S.Description>
            Quickly maximize timely deliverables for real-time maintain schemas.
          </S.Description>

          <S.FormInput label={"Your Name (required)"} control={control} name='userName' />

          <S.FormCheckbox
            label={"I agree to the Terms of Service"}
            control={control}
            name='agreeToTOS'
          />

          <S.Actions>
            <S.Button>Send</S.Button>
          </S.Actions>
          <S.FormError hide={!error}>{error}</S.FormError>
        </>
      )}
    </S.Form>
  );
};
