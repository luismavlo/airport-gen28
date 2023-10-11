
import { AppError, catchAsync } from '../errors/index.js';
import { validateFlight, validatePartialFlight } from './flight.schema.js';
import { FlightService } from './flight.service.js';

const flightService = new FlightService();

export const findAllFlights = catchAsync(async (req, res, next) => {
  const flights = await flightService.findAll();

  return res.status(200).json(flights);
});

export const createFlights = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, flightData } = validateFlight(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const flight = await flightService.create(flightData);

  return res.status(200).json(flight);
});

export const updateFlights = catchAsync(async (req, res, next) => {
  const { hasError, errorMessages, flightData } = validatePartialFlight(
    req.body
  );

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const { id } = req.params;

  const flight = await flightService.findOne(id);

  if (!flight) {
    return next(new AppError(`flight with id: ${id} not found!`));
  }

  const updatedFlight = await flightService.update(flight, flightData);

  return res.status(200).json(updatedFlight);
});

export const deleteFlights = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const flight = await flightService.findOne(id, 'pending');

  if (!flight) {
    return next(new AppError(`can't find flight with id: ${id}`));
  }

  await flightService.delete(flight);

  return res.status(204).json(null);
});
