import * as S from "./elements";
import { useController } from "react-hook-form";

export interface FormTextAreaProps {
  label?: string;
}

export const FormTextArea: ControlledTextArea<FormTextAreaProps> = ({
  name,
  control,
  label,
  ...props
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control,
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
