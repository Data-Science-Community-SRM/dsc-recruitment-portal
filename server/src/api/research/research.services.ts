import { getResearchCollection } from "@/loaders/collections";
import ERRORS from "@/shared/errors";

export const registerResearch = async (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  researchArea: string,
  experience: string,
  publications: string,
  linkedin: string
) => {
  const collection = await getResearchCollection();
  const candidate = await collection.findOne({ email });
  if (candidate) {
    throw {
      statusCode: ERRORS.CANDIDATE_ALREADY_REGISTERED.statusCode,
      message: ERRORS.CANDIDATE_ALREADY_REGISTERED.message,
    };
  }
  const data = await collection.insertOne({
    firstName,
    lastName,
    email,
    phoneNumber,
    researchArea,
    experience,
    publications,
    linkedin,
  });
  return data;
};
