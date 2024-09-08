import { Router } from "express";
import { CorporateSchema } from "./corporate.schema";
import { registerCorporateHandler } from "./corporate.controller";
import { validateRequest } from "../../shared/middlewares/valiator";

export default (): Router => {
    const app = Router();
    app.post(
      '/',
      validateRequest('body', CorporateSchema),
      registerCorporateHandler
    );
    return app;
}