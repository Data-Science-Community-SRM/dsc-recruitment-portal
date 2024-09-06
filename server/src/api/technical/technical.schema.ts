import { z } from "zod";

export const TechnicalSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  registrationNumber: z.string(),
  srmEmail: z.string().email(),
  personalEmail: z.string().email(),
  phoneNumber: z.string(),
  department: z.string(),
  year: z.number(),
});
