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
      email,
      phoneNumber,
      researchArea,
      experience,
      publications,
      linkedin,
    } = req.body;
    await registerResearch(
      firstName,
      lastName,
      email,
      phoneNumber,
      researchArea,
      experience,
      publications,
      linkedin
    );
    res.status(CONSTANTS.RESEARCH_REGISTER_SUCCESSFULLY.code).send({
      success: CONSTANTS.RESEARCH_REGISTER_SUCCESSFULLY.success,
      message: CONSTANTS.RESEARCH_REGISTER_SUCCESSFULLY.message,
    });
  } catch (error) {
    next(error);
  }
};
