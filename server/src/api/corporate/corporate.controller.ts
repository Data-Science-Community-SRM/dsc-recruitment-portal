import type { NextFunction, Request, Response } from "express";
import { registerCorporate } from "./corporate.services";
import CONSTANTS from "../../shared/constants";

export const registerCorporateHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      firstName,
      lastName,
      srmEmail,
      registrationNumber,
      personalEmail,
      phoneNumber,
      department,
      year,
      subDomain,
    } = req.body;
    await registerCorporate(
      firstName,
      lastName,
      srmEmail,
      registrationNumber,
      personalEmail,
      phoneNumber,
      department,
      year,
      subDomain,
    );
    res.status(CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.code).send({
        success: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.success,
        message: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.message,
    })
  } catch (error) {
    next(error);
  }
};
