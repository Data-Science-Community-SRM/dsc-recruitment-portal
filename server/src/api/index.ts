import { Router } from "express";
import testRouter from "./test/test.router";
import technicalRouter from "./technical/technical.router";
import creativeRouter from "./creative/creative.router";
import corporateRouter from "./corporate/corporate.router";
import researchRouter from "./research/research.router";
export default (): Router => {
    const app = Router();
    app.use('/test', testRouter());
    app.use('/technical', technicalRouter());
    app.use('/corporate', corporateRouter());
    app.use("/creatives", creativeRouter());
    app.use("/research", researchRouter());
    return app;
};

