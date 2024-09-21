import { sendConfirmation } from "../../shared/utils/confirm";
import { getResearchCollection } from "../../loaders/collections";
import ERRORS from "../../shared/errors";
import { updateSheet } from "../../shared/utils/sheets";

export const registerResearch = async (
  firstName: string,
  lastName: string,
  srmEmail: string,
  personalEmail: string,
  registrationNumber: string,
  phoneNumber: string,
  department: string,
  year: string,
  github: string
) => {
  const collection = await getResearchCollection();
  const candidate = await collection.findOne({ registrationNumber });
  if (candidate) {
    throw {
      statusCode: ERRORS.STUDENT_ALREADY_REGISTERED.statusCode,
      message: ERRORS.STUDENT_ALREADY_REGISTERED.message,
    };
  }

  const data = await collection.insertOne({
    firstName,
    lastName,
    srmEmail,
    personalEmail,
    registrationNumber,
    phoneNumber,
    department,
    year,
    github,
  });
  
  sendConfirmation({
    firstName,
    lastName,
    email: srmEmail,
    domain: "research",
  })
  await updateSheet('Research', {
    id: data.insertedId,
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
