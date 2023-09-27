import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    occupation: z.string().min(3).max(50),
    location: z.string().min(3).max(50),
    birthday: z.date().or(z.string()),
    bio: z.string().min(3).max(1000),
})