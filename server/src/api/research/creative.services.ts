import { getCreativeCollection } from "@/loaders/collections";
import ERRORS from "@/shared/errors";

export const registerCreative = async (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  portfolioUrl: string,
  department: string,
  experience: string,
  creativeStatement: string,
  linkedin: string
) => {
  const collection = await getCreativeCollection();
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
    portfolioUrl,
    department,
    experience,
    creativeStatement,
    linkedin,
  });
  return data;
};
