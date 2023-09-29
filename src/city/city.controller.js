import { validateCity } from "./city.schema.js";
import { CityService } from "./city.service.js"

const cityService = new CityService();

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

