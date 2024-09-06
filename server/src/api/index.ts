import { Router } from "express";
import testRouter from "./test/test.router";
import technicalRouter from "./technical/technical.router";

export default (): Router => {
    const app = Router();
    app.use('/test', testRouter());
    app.use('/technical', technicalRouter());
    return app;
};