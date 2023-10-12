import express from 'express';
import { restrictTo } from '../auth/auth.middleware.js';

import {
  createBooking,
} from './booking.controller.js'

export const router = express.Router()

router.route('/')
  .post(restrictTo('developer', 'receptionist'), createBooking)
