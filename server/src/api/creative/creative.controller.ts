import type { NextFunction, Request, Response } from "express";
import { registerCreative } from "./creative.services";
import CONSTANTS from "@/shared/constants";

export const registerCreativeHandler = async (
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
    } = req.body;
    await registerCreative(
      firstName,
      lastName,
      srmEmail,
      registrationNumber,
      personalEmail,
      phoneNumber,
      department,
      year
    );
    res.status(CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.code).send({
      success: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.success,
      message: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.message,
    });
  } catch (error) {
    next(error);
  }
};
