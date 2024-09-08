import { Router } from "express";
import { CreativeSchema } from "./creative.schema";
import { registerCreativeHandler } from "./creative.controller";
import { validateRequest } from "../../shared/middlewares/valiator";

export default (): Router => {
  const app = Router();
  app.post(
    "/",
    validateRequest("body", CreativeSchema),
    registerCreativeHandler
  );
  return app;
};
