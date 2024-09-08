import { getResearchCollection } from "@/loaders/collections";
import ERRORS from "@/shared/errors";

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
    try {
        const collection = await getResearchCollection();

        const candidate = await collection.findOne({ personalEmail });
        if (candidate) {
            throw {
                statusCode: ERRORS.STUDENT_ALREADY_REGISTERED.statusCode,
                message: ERRORS.STUDENT_ALREADY_REGISTERED.message,
            };
        }

        const result = await collection.insertOne({
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

        return result;
    } catch (error) {
        console.error('Error registering research:', error);
        throw error;
    }
};
