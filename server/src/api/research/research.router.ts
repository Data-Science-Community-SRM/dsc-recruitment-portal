import { Router } from "express";
import { ResearchSchema } from "./research.schema";
import { registerResearchHandler } from "./research.controller";
import { validateRequest } from "../../shared/middlewares/valiator";

export default (): Router => {
  const app = Router();
  app.post(
    '/',
    validateRequest('body', ResearchSchema),
    registerResearchHandler
  );

  return app;
};
