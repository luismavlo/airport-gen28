import Ticket from "./ticket.model.js";

export class TicketService {
  async findOne(id){
    return await Ticket.findOne({
      where: {
        id,
        status: true
      }
    })
  }

  async findAll(){
    return await Ticket.findAll({
      where: {
        status: true
      }
    })
  }

  async create(data){
    return await Ticket.create(data)
  }

  async update(ticket, data){
    return await ticket.update(data)
  }

  async delete(ticket){
    return await ticket.update({ status: false })
  }

  async findOneTicketByFlightId(flightId){
    return await Ticket.findOne({
      where: {
        flightId: flightId,
        status: true
      }
    })
  }
}