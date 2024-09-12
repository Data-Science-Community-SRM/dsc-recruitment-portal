import type { NextFunction, Request, Response } from "express";
import { registerTechnical } from "./technical.services";
import CONSTANTS from "../../shared/constants";

export const registerTechnicalHandler = async (
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
      github,
      subDomain
    } = req.body;
    await registerTechnical(
      firstName,
      lastName,
      srmEmail,
      registrationNumber,
      personalEmail,
      phoneNumber,
      department,
      year,
      github,
      subDomain
    );
    res.status(CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.code).send({
        success: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.success,
        message: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.message,
    })
  } catch (error) {
    next(error);
  }
};
