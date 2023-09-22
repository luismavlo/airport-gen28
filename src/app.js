const express = require("express");

const app = express();

//Rutas
//endpoint 1: obtener todos los pasajeros
app.get("/passengers", (req, res) => {
  console.log(req);
  res.send("este endpoint devolvera todos los pasajeros");
});

//endpoint 2: crear un pasajero

//edpoint 3: obtener un pasajero dado su id

//endpoint 4: actualizar la información de un pasajero

//edpoint 5: eliminar la información de un pasajero

app.listen(3000, () => {
  console.log(`Server is running on port 3000 🤩`);
});
