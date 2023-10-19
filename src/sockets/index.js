export class Socket {
  constructor(io) {
    this.io = io;

    this.socketEvents();
  }

  socketEvents() {
    this.io.on('connection', (socket) => {
      socket.on("change-status-flight", (data) => {
        console.log(data)
        // socket.broadcast.emit("render-change-status", data)
        this.io.emit("render-change-status", data)
      })
    });
  }
}
