import { template } from 'dot';

export const getTemplatedString = (data: any, file: string): string => {
  try {
    const templateVariable = template(file);
    return templateVariable(data);
  } catch (error) {
    throw {
        statusCode: 409,
        message: "REGISTRATION DONE BUT ERROR IN SENDING MAIL"
    }
  }
};
