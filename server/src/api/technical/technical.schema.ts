import { z } from "zod";

export const TechnicalSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  srmEmail: z.string().email(),
  registrationNumber: z.string(),
  personalEmail: z.string().email(),
  phoneNumber: z.string(),
  department: z.string(),
  year: z.number(),
  github: z.string().url(),
  subDomain: z.string()
});
