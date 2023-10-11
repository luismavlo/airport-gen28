import Flight from './flight.model.js';

export class FlightService {
  
  async findAll() {
    return await Flight.findAll({
      where: {
        status: {
          [Op.notIn]: ['done', 'cancelled'],
        },
      },
    });
  }

  async create(flightData) {
    return await Flight.create(flightData);
  }

  async update(flight, flightData) {
    return await flight.update(flightData);
  }

  async delete(flight) {
    return await flight.update({
      status: 'cancelled',
    });
  }
}
