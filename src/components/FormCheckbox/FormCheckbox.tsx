import * as S from "./elements";
import { useController, FieldValues, Control, Path } from "react-hook-form";

export interface FormCheckboxProps<T extends FieldValues = any> extends HTMLInputProps {
  name: Path<T>;
  control: Control<T, any>;
  label?: string;
}

export const FormCheckbox = <T extends FieldValues = any>({
  name,
  control,
  label,
  ...props
}: FormCheckboxProps<T>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: false as any
  });

  return (
    <S.Container {...props}>
      <S.InputWrapper>
        <S.Input
          {...props}
          type='checkbox'
          spellCheck={false}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          checked={value}
          name={name}
          id={name}
          ref={ref}
        />
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputWrapper>
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.Container>
  );
};

FormCheckbox.displayName = "FormCheckbox";
