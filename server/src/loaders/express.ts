import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import config from "../config";
import routes from "../api";
import { errorHandler } from "../shared/middlewares/errorHandler";

export default ({ app }: { app: express.Application }): void => {
  app.get("/healthcheck", (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    try {
      return res.json(healthcheck);
    } catch (e) {
      return res.status(503).send();
    }
  });
  app.enable("trust proxy");
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());
  app.use(errorHandler);
};
