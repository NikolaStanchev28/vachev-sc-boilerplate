import { useForm, FieldValues, DeepPartial } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 *
 * @param formSchema  zod schema to validate the form values against
 * @param defaultValues  default values for the form
 * @returns  react-hook-form useForm hook with zod resolver
 */
export const useZodForm = <TValues extends FieldValues>(
  formSchema: z.Schema<TValues>,
  defaultValues?: DeepPartial<TValues>
) => {
  const resolver = zodResolver(formSchema);

  return useForm<TValues>({ resolver, defaultValues });
};
