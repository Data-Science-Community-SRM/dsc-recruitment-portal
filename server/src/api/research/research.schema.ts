import { toTitleCase } from "../../shared/utils/titleCase";
import { z } from "zod";

export const ResearchSchema = z.object({
  firstName: z.string().trim().transform(toTitleCase),
  lastName: z.string().trim().transform(toTitleCase),
  srmEmail: z.string().email(),
  personalEmail: z.string().email(),
  registrationNumber: z.string().trim().toUpperCase(),
  phoneNumber: z.string(),
  department: z.string().trim(),
  year: z.string(),
  github: z.string().url(),
});
