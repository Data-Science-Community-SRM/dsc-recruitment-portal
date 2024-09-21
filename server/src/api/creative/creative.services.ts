import { sendConfirmation } from "../../shared/utils/confirm";
import { getCreativeCollection } from "../../loaders/collections";
import ERRORS from "../../shared/errors";
import { updateSheet } from "../../shared/utils/sheets";

export const registerCreative = async (
  firstName: string,
  lastName: string,
  srmEmail: string,
  registrationNumber: string,
  personalEmail: string,
  phoneNumber: string,
  department: string,
  year: number,
  subDomain: string
) => {
  const collection = await getCreativeCollection();
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
  
  sendConfirmation({
    firstName,
    lastName,
    email: srmEmail,
    domain: 'creative',
  })
  await updateSheet('Creative', {
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
  })
  return data;
};
