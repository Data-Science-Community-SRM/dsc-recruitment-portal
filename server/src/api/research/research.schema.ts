import { z } from "zod";

export const ResearchSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  srmemail: z.string().email(),
  perosnalemail: z.string().email(),
  registrationNumber: z.string(),
  phoneNumber: z.string(),
  department: z.string(),
  year: z.string(),
  github: z.string().url(),
});
