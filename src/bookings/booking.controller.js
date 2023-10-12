import { catchAsync } from "../errors/index.js";
import { validateBooking } from "./booking.schema.js";


export const createBooking = catchAsync(async(req,res,next) => {

  const { hasError, errorMessages, bookingData} = validateBooking(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  //validar que en el arreglo de ticketes que llegan no tenga numero de asientos repetidos.

  

})