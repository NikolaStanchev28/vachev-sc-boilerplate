import { useController, FieldValues, Path, Control } from "react-hook-form";
import * as S from "./elements";

export interface FormTextAreaProps<T extends FieldValues = any> extends HTMLTextAreaProps {
  name: Path<T>;
  control: Control<T, any>;
  label?: string;
}

export const FormTextArea = ({ name, control, label, ...props }: FormTextAreaProps) => {
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

FormTextArea.displayName = "FormTextArea";
