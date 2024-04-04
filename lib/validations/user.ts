import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  occupation: z.string().min(3).max(50),
  location: z.string().min(3).max(50),
  birthday: z.date().or(z.string()),
  bio: z.string().min(3).max(1000),
  linkedin: z
    .string()
    .nullable()
    .refine((val) => !val || isURL(val), {
      message: "Enter a valid URL",
    }),
  twitter: z
    .string()
    .nullable()
    .refine((val) => !val || isURL(val), {
      message: "Enter a valid URL",
    }),
  facebook: z
    .string()
    .nullable()
    .refine((val) => !val || isURL(val), {
      message: "Enter a valid URL",
    }),
  instagram: z
    .string()
    .nullable()
    .refine((val) => !val || isURL(val), {
      message: "Enter a valid URL",
    }),
});

function isURL(value: string | null | undefined): boolean {
  // Custom validation function to check if the value is a valid URL
  if (!value) return true; // Allow empty values
  const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
  return pattern.test(value);
}
