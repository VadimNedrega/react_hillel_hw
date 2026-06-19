import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password must be at least 5 characters"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  phone: z.string().min(10, "Phone is too short").optional(),
});