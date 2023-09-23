export const findAllPassengers = (req, res) => {
  res.json({
    message: 'este endpoint devolvera todos los pasajeros'
  })
}

export const createPassenger = (req, res) => {
  const passenger = req.body;
  res.json(passenger)
}

export const findOnePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message: "este endpoint obtendra un passagero dado su id",
    id: id
  })
}

export const updatePassenger = (req, res) => {
  const { id } = req.params;

  res.json({
    message:"este endpoitn actualizara el estado del pasajero",
    id
  })
}

export const deletePassenger = (req, res) => {
  const { id } = req.params;
  
  res.json({
    message : 'este endpoint eliminara una informacion',
    id
  })
}