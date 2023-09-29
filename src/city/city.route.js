import { Router } from 'express';
import { createCity } from './city.controller.js'

export const router = Router()


router.route("/").post(createCity)