import { CityService } from "./city.service.js"

const cityService = new CityService();

export const createCity = async(req, res) => {
  try {
    const city = await cityService.createCity(req.body)
    return res.status(201).json(city)
  } catch (error) {
    return res.status(500).json(error)
  }
}

