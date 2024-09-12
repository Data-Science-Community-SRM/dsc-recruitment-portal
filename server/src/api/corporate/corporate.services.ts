import { getCorporateCollection } from "../../loaders/collections";
import ERRORS from "../../shared/errors";

export const registerCorporate = async (
  firstName: string,
  lastName: string,
  srmEmail: string,
  registrationNumber: string,
  personalEmail: string,
  phoneNumber: string,
  department: string,
  year: number,
  subDomain: string,
) => {
  const collection = await getCorporateCollection();
  const student = await collection.findOne({ registrationNumber });
  if (student) {
    throw {
      statusCode: ERRORS.STUDENT_ALREADY_REGISTERED.statusCode,
      message: ERRORS.STUDENT_ALREADY_REGISTERED.message,
    };
  }
  const data = await collection.insertOne({
    firstName,
    lastName,
    srmEmail,
    registrationNumber,
    personalEmail,
    phoneNumber,
    department,
    year,
    subDomain,
  });
  return data;
};
