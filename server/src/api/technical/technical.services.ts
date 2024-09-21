import { sendConfirmation } from "../../shared/utils/confirm";
import { getTechnicalCollection } from "../../loaders/collections";
import ERRORS from "../../shared/errors";
import { updateSheet } from "../../shared/utils/sheets";

export const registerTechnical = async (
  firstName: string,
  lastName: string,
  srmEmail: string,
  registrationNumber: string,
  personalEmail: string,
  phoneNumber: string,
  department: string,
  year: number,
  github: string,
  subDomain: string
) => {
  const collection = await getTechnicalCollection();
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
    github,
    subDomain,
  });
  sendConfirmation({
    firstName,
    lastName,
    email: srmEmail,
    domain: 'technical',
  })
  await updateSheet('Technical', {
    id: data.insertedId,
    subDomain,
    firstName,
    lastName,
    year,
    registrationNumber,
    department,
    srmEmail,
    personalEmail,
    phoneNumber,
    github,
  })
  return data;
};
