import { useForm, FieldValues, DeepPartial } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

/**
 *
 * @param formSchema  zod schema to validate the form values against
 * @returns  react-hook-form useForm hook with zod resolver and default values
 */
export const useZodForm = <TValues extends FieldValues>(formSchema: z.Schema<TValues>) => {
  const resolver = zodResolver(formSchema);

  const defaultValues = Object.keys(formSchema).reduce(
    (acc, key) => ({ ...acc, [key]: "" }),
    {}
  ) as DeepPartial<TValues>;

  return useForm<TValues>({ resolver, defaultValues });
};
