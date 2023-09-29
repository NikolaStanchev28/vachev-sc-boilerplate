import { Control, FieldValues, Path } from "react-hook-form";

declare global {
  type ControlledProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T, any>;
  };

  type ControlledInputProps<T extends FieldValues> = ControlledProps<T> &
    Omit<HTMLInputProps, "name">;

  type ControlledTextAreaProps<T extends FieldValues> = ControlledProps<T> &
    Omit<HTMLTextAreaProps, "name">;

  type ControlledInput<P = {}> = <T extends FieldValues = any>({
    name,
    control,
    ...props
  }: P & ControlledInputProps<T>) => JSX.Element;

  type ControlledTextArea<P = {}> = <T extends FieldValues = any>({
    name,
    control,
    ...props
  }: P & ControlledTextAreaProps<T>) => JSX.Element;
}
