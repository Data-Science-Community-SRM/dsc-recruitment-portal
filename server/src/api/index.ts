import { Router } from "express";
import testRouter from "./test/test.router";
import technicalRouter from "./technical/technical.router";
import creativeRouter from "./creative/creative.router";
import corporateRouter from "./corporate/corporate.router";
export default (): Router => {
    const app = Router();
    app.use('/test', testRouter());
    app.use('/technical', technicalRouter());
    app.use('/corporate', corporateRouter());
    app.use("/creative", creativeRouter());
    return app;
};

