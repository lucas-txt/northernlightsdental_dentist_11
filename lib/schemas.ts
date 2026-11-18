import { z } from "zod";

export const appointmentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep your name under 80 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(2, "Please add a subject.")
    .max(120, "Please keep the subject under 120 characters."),
  phone: z
    .string()
    .trim()
    .max(30, "Please keep the phone number under 30 characters.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about your request.")
    .max(1200, "Please keep your message under 1,200 characters."),
});

export type AppointmentValues = z.infer<typeof appointmentSchema>;
