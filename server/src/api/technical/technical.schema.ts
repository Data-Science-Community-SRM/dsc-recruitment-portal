import { z } from "zod";
import { toTitleCase } from "../../shared/utils/titleCase";

export const TechnicalSchema = z.object({
  firstName: z.string().trim().transform(toTitleCase),
  lastName: z.string().trim().transform(toTitleCase),
  srmEmail: z.string().email(),
  registrationNumber: z.string().trim().toUpperCase(),
  personalEmail: z.string().email(),
  phoneNumber: z.string(),
  department: z.string().trim(),
  year: z.number(),
  github: z.string().url(),
  subDomain: z.string()
});
