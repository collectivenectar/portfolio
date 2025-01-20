import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .max(100, "Name is too long"),
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  phoneNumber: z.string()
    .optional()
    .refine((val) => !val || /^(\+\d{1,3}[-.]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(val), {
      message: "Invalid phone number format"
    }),
  message: z.string()
    .min(1, "Message is required")
    .max(1000, "Message is too long")
})

export type ContactFormType = z.infer<typeof contactFormSchema>