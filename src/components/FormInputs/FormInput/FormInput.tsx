import * as S from "./elements";
import { useController } from "react-hook-form";

export interface FormInputProps {
  label?: string;
}

export const FormInput: ControlledInput<FormInputProps> = ({ name, control, label, ...props }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control,
    defaultValue: "" as any
  });

  return (
    <S.Container {...props}>
      <S.InputWrapper>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Input
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          id={name}
          ref={ref}
        />
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};
