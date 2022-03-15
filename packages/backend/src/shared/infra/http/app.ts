import "reflect-metadata";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import "@shared/container";

import methodOverride from "method-override";

import { AppError } from "@shared/errors/AppError";
import { ImportCSVController } from "@modules/import/products/useCases/importCSV/ImportCSVController";
import { ImportImagesController } from "@modules/import/products/useCases/importImages/ImportImagesController";

import { router } from "./routes";
import { CronJob } from "cron";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use(methodOverride("_method"));

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`
    });
  }
);

const autoImport = new CronJob(
  "* * * * * *",
  async () => {
    const importCSVController = new ImportCSVController();
    const importImagesController = new ImportImagesController();

    await importCSVController.handle();
    await importImagesController.handle()
  },
  null,
  false,
  "America/Sao_Paulo"
);

autoImport.start();

export { app };
