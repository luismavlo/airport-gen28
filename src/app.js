import express from "express";
import { router as passengerRouter } from './passengers/passengers.route.js'

const app = express();

//esto me permite recibir informacion en formato json
app.use(express.json())

app.use("/api/v1", passengerRouter)

export default app;

