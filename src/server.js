import { envs } from './config/enviroments/enviroments.js'
import app from "./app.js"
import { authenticate, syncUp } from './config/database/database.js'
import { initModel } from './config/database/associations.js'
import { Server } from 'socket.io';
import { Socket } from './sockets/index.js';


async function main(){
  try {
    await authenticate()
    initModel()
    await syncUp()
  } catch (error) {
    console.error(error)
  }
}

main()

const server = app.listen(envs.PORT, () => {
  console.log(`Server is running on port ${envs.PORT}.`);
});

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

new Socket(io);
