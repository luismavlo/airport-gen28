import { FlightService } from './../flights/flight.service.js'

export class Socket {
  constructor(io) {
    this.io = io;
    this.flightService = new FlightService()
    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      socket.on("change-status-flight", async(data) => {
        const flights = await this.flightService.findAllWithAllData()
        console.log(flights)
        // socket.broadcast.emit("render-change-status", data)
        this.io.emit("render-new-flights", flights)
      })
    });
  }
}
