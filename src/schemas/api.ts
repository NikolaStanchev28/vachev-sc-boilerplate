import { z } from "zod";

export const helloSchema = z.object({
  userName: z
    .string({
      invalid_type_error: "userName must be of type string.",
      required_error: "userName is required."
    })
    .nonempty("userName field cannot be empty."),
  agreeToTOS: z
    .boolean({
      invalid_type_error: "agreeToTOS must be of type boolean.",
      required_error: "agreeToTOS is required."
    })
    .refine(value => value === true, { message: "You must agree to the TOS." })
});
