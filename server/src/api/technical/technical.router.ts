import { Router } from "express";
import { TechnicalSchema } from "./technical.schema";
import { registerTechnicalHandler } from "./technical.controller";
import { validateRequest } from "../../shared/middlewares/validator";

export default (): Router => {
    const app = Router();
    app.post(
      '/',
      validateRequest('body', TechnicalSchema),
      registerTechnicalHandler
    );
    return app;
}