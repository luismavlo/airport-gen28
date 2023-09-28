import { PassengerService } from "./passengers.service.js";

const passengerService = new PassengerService()

export const findAllPassengers = async (req, res) => {
  try {
    const passengers = await passengerService.findAllPassengers()
    return res.json(passengers)
  } catch (error) {
     return res.status(500).json(error)
  }
}

export const createPassenger = async(req, res) => {
  try {
    const passenger = await passengerService.createPassenger(req.body)
    return res.status(201).json(passenger)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const findOnePassenger = async(req, res) => {
  try {
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id)
   
    if(!passenger){
      return res.status(404).json({
        status: 'error',
        message: `Passenger with id: ${id} not found`
      })
    }

    return res.json(passenger)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const updatePassenger = async(req, res) => {
  try {
    //1. obtener el id del pasajero a actualizar
    const { id } = req.params;
    //2. buscar el pasajero que vamos a actualizar
    const passenger = await passengerService.findOnePassenger(id)
    //3. validar si el pasajero existe
    if(!passenger){
      return res.status(404).json({
        status: 'error',
        message: `passenger with id ${ id } not found`
      })
    }
    //4. en caso de que exista, se procede a actualizar el pasajero
    const updatedPassenger = await passengerService.updatePassenger(passenger, req.body)
    //5. retornamos el pasajero actualizado.
    return res.json(updatedPassenger)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const deletePassenger = async(req, res) => {
  try {
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id)

    if(!passenger){
      return res.status(404).json({
        status: 'error',
        message: `Passenger with id ${id} not found`
      })
    }
    
    await passengerService.deletePassenger(passenger)
    
    return res.status(204).json(null)
  } catch (error) {
    return res.status(500).json(error)
  }
}