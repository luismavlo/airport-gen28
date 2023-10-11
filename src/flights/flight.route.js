import express from 'express';
import {
  createFlights,
  deleteFlights,
  findAllFlights,
  updateFlights,
} from './flight.controller.js';
import { protect, restrictTo } from '../auth/auth.middleware.js';

export const router = express.Router();

router.use(protect);

router
  .route('/')
  .get(findAllFlights)
  .post(restrictTo('admin', 'developer'), createFlights);

router
  .route('/:id')
  .patch(restrictTo('admin', 'developer'), updateFlights)
  .delete(restrictTo('admin', 'developer'), deleteFlights);
