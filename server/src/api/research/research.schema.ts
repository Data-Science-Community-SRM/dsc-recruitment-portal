import { z } from "zod";

export const ResearchSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  researchArea: z.string(),
  experience: z.string(),
  publications: z.string().url().optional(),
  linkedin: z.string().url().optional(),
});
