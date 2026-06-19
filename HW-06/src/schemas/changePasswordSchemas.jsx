import { z } from "zod";

export const changePasswordSchema = z
    .object({
        currentPassword: z
            .string()
            .min(5, "Current password must be at least 5 characters"),

        newPassword: z
            .string()
            .min(5, "New password must be at least 5 characters"),

        confirmPassword: z
            .string()
            .min(5, "Confirm password must be at least 5 characters"),
    })
    .refine(
        (data) => data.newPassword === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    ).refine(
        (data) => data.currentPassword !== data.newPassword,
        {
            message: "New password must be different",
            path: ["newPassword"],
        }
    );