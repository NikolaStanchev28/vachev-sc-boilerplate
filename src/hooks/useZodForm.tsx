import { useForm, FieldValues, DeepPartial, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 * @param formSchema  zod schema to validate the form values against
 * @param defaultValues  default values for the form
 * @param options  rest of the options to pass to the react-hook-form useForm hook
 * @returns  react-hook-form useForm hook with zod resolver
 */
export const useZodForm = <TValues extends FieldValues>(
  formSchema: z.Schema<TValues>,
  defaultValues?: DeepPartial<TValues>,
  options?: Omit<UseFormProps<TValues>, "resolver" | "defaultValues">
) => {
  const resolver = zodResolver(formSchema);

  return useForm<TValues>({ resolver, defaultValues, ...options });
};
