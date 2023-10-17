import { Router } from "express";

import {
  findAllPassengers,
  createPassenger,
  findOnePassenger,
  updatePassenger,
  deletePassenger,
} from "./passengers.controller.js";
import { restrictTo } from "../auth/auth.middleware.js";
import { uploadSingle } from "../config/plugins/upload-files.plugin.js";


export const router = Router();

router
  .route("/")
  .get(restrictTo('receptionist', 'developer', 'admin'), findAllPassengers)
  .post(uploadSingle('photo'), restrictTo('receptionist', 'developer'), createPassenger);

router
  .route("/:id")
  .get(restrictTo('receptionist', 'developer', 'admin'), findOnePassenger)
  .patch(restrictTo('receptionist', 'developer'),updatePassenger)
  .delete(restrictTo('receptionist', 'developer'),deletePassenger)


