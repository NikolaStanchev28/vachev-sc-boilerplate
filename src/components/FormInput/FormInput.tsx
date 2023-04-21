import { useController, Control, Path, FieldValues } from "react-hook-form";
import * as S from "./elements";

export interface FormInputProps<T extends FieldValues = any> extends HTMLInputProps {
  name: Path<T>;
  control: Control<T, any>;
  label?: string;
}

export const FormInput = ({ name, control, label, ...props }: FormInputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: ""
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

FormInput.displayName = "FormInput";
