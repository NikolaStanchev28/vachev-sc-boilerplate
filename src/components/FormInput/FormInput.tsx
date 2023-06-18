import * as S from "./elements";
import { useController, FieldValues } from "react-hook-form";

export interface FormInputProps {
  label?: string;
}

export const FormInput = <T extends FieldValues = any>({
  name,
  control,
  label,
  ...props
}: FormInputProps & ControlledInputProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "" as any
  });

  return (
    <S.Container {...props}>
      <S.InputWrapper>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.Input
          {...props}
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
