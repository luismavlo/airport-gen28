import Booking from "./booking.model.js";

export class BookingService {

  async findOne(id) {
    return await Booking.findOne({ where: { id, status: 'pending' } });
  }

  async findAll(status) {
    return await Booking.findAll({ where: { status: status } });
  }

  async create(data) {
    return await Booking.create(data);
  }

  async update(booking, data) {
    return await booking.update(data);
  }

  async delete(booking) {
    return await booking.update({ status: 'cancelled' });
  }

}