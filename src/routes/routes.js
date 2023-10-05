import { Router } from 'express'
import { router as passengerRouter } from '../passengers/passengers.route.js'
import { router as cityRouter } from '../city/city.route.js'
import { router as authRouter } from '../auth/auth.route.js'

export const router = Router()
// lo que coloque aca se va a concatenar con /api/v1
router.use('/passengers', passengerRouter)
router.use('/city', cityRouter)
router.use('/users', authRouter)

