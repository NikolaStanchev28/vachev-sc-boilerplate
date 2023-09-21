import * as S from "./elements";
import { useController } from "react-hook-form";

export interface FormCheckboxProps {
  label?: string;
}

export const FormCheckbox: ControlledInput<FormCheckboxProps> = ({
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
    defaultValue: false as any
  });

  return (
    <S.Container {...props}>
      <S.InputWrapper>
        <S.Input
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
