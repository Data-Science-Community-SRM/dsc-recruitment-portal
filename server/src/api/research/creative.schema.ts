import { z } from "zod";

export const CreativeSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  portfolioUrl: z.string().url(),
  department: z.string(),
  experience: z.string(),
  creativeStatement: z.string().optional(),
  linkedin: z.string().url().optional(),
});
