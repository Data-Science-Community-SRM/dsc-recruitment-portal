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
      email,
      phoneNumber,
      portfolioUrl,
      department,
      experience,
      creativeStatement,
      linkedin,
    } = req.body;
    await registerCreative(
      firstName,
      lastName,
      email,
      phoneNumber,
      portfolioUrl,
      department,
      experience,
      creativeStatement,
      linkedin
    );
    res.status(CONSTANTS.CREATIVE_REGISTER_SUCCESSFULLY.code).send({
        success: CONSTANTS.CREATIVE_REGISTER_SUCCESSFULLY.success,
        message: CONSTANTS.CREATIVE_REGISTER_SUCCESSFULLY.message,
    });
  } catch (error) {
    next(error);
  }
};
