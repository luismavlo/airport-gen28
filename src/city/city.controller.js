import { validateCity, validatePartialCity } from "./city.schema.js";
import { CityService } from "./city.service.js"

const cityService = new CityService();

export const findAllCities = async(req, res) => {
  try {
    const cities = await cityService.findAllCities()

    return res.status(200).json(cities)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const findOneCity = async(req, res) => {
  try {
    const { city } = req;

    return res.status(200).json(city)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const createCity = async(req, res) => {
  try {

    const { hasError, errorMessages, cityData } = validateCity(req.body)

    if(hasError){
      return res.status(422).json({
        status: 'error',
        messages: errorMessages
      })
    }

    const city = await cityService.createCity(cityData)
    return res.status(201).json(city)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const deleteCity = async(req, res) => {
  try {
    const { city } = req;

    await cityService.deleteCity(city)

    return res.status(204).json(null)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const updateCity = async(req, res) => {
  try {
    const { city } = req;

    const { hasError, errorMessages, dataCity } = validatePartialCity(req.body)

    if(hasError){
      return res.status(422).json({
        status: 'error',
        message: errorMessages
      })
    }

    const cityUpdated = await cityService.updateCity(city, dataCity)

    return res.status(200).json(cityUpdated)
    
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}
