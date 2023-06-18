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
}
