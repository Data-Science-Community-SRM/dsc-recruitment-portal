import { validateRequest } from "@/shared/middlewares/valiator";
import { Router } from "express";
import { TechnicalSchema } from "./technical.schema";

export default (): Router => {
    const app = Router();
    app.post(
      '/register',
      validateRequest('body', TechnicalSchema),
      
    );
    return app;
}