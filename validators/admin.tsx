import { z } from "zod";

export const createAdminSchema = z.object({
    email: z.string().email().min(5).max(100),
    password: z.string().min(4),
});