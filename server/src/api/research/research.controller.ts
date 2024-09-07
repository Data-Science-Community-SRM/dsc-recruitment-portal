import type { NextFunction, Request, Response } from "express";
import { registerResearch } from "./research.services";
import CONSTANTS from "@/shared/constants";

export const registerResearchHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      firstName,
      lastName,
      srmemail,
      personalemail(),
      registationNumber(),
      phoneNumber,
      department,
      year,
      github,
    } = req.body;
    await registerResearch(
        firstName,
        lastName,
        srmemail,
        personalemail,
        registationNumber,
        phoneNumber,
        department,
        year,
        github
    );
    res.status(CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.code).send({
      success: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.success,
      message: CONSTANTS.STUDENT_REGISTER_SUCCESSFULLY.message,
    });
  } catch (error) {
    next(error);
  }
};
