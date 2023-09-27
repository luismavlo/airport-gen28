import express from "express";
import { router as passengerRouter } from './passengers/passengers.route.js'

const app = express();

app.use(express.json())

app.use("/api/v1", passengerRouter)

export default app;

