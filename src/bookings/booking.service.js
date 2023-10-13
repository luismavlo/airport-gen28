import Booking from "./booking.model.js";

export class BookingService {

  async create(data){
    return await Booking.create(data)
  }

}