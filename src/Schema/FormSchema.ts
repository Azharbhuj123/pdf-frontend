import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.email("Invalid email").toLowerCase().trim(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .trim(),
});

export type LoginFormType = z.infer<typeof loginFormSchema>;
