import * as S from "./elements";
import { useController, FieldValues } from "react-hook-form";

export interface FormTextAreaProps {
  label?: string;
}

export const FormTextArea = <T extends FieldValues = any>({
  name,
  control,
  label,
  ...props
}: FormTextAreaProps & ControlledTextAreaProps<T>) => {
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
    <S.Container>
      <S.InputWrapper>
        {label && <S.Label htmlFor={name}>{label}</S.Label>}
        <S.TextArea
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
