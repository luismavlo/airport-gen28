import express from 'express';
import {
  createFlights,
  deleteFlights,
  findAllFlights,
  updateFlights,
  findOneFlights,
  approveFlight,
} from './flight.controller.js';
import { restrictTo } from '../auth/auth.middleware.js';

export const router = express.Router();

router
  .route('/')
  .get(findAllFlights)
  .post(createFlights);

router.patch(
  '/approve-takeoff/:id',
  approveFlight
)

router
  .route('/:id')
  .get(findOneFlights)
  .patch(updateFlights)
  .delete(deleteFlights);
