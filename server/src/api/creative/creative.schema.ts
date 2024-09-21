import { toTitleCase } from "../../shared/utils/titleCase";
import { z } from "zod";

export const CreativeSchema = z.object({
  firstName: z.string().trim().transform(toTitleCase),
  lastName: z.string().trim().transform(toTitleCase),
  srmEmail: z.string().email(),
  registrationNumber: z.string().trim().toUpperCase(),
  personalEmail: z.string().email(),
  phoneNumber: z.string(),
  department: z.string().trim(),
  year: z.number(),
  subDomain: z.string(),
});
