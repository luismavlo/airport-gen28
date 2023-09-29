import z from 'zod';

export const passengerSchema = z.object({
  nroPassport: z.string().min(8).max(10),
  name: z.string().min(2).max(99),
  surname: z.string().min(2).max(100),
  birthdate: z.string({
    invalid_type_error: "Bithdate must be a correct format",
    required_error: "Birthdate is required"
  }),
  gender: z.enum(['male', 'female', 'prefer not to say']),
  email: z.string().email(),
  celphone: z.string().min(5).max(25)
})

export function validatePassenger(data){
  const result = passengerSchema.safeParse(data)

  const { hasError, errorMessages, data } = extractValidationData(result)
  
  return {
    hasError,
    errorMessages,
    data
  }
}

export const extractValidationData = (resultValidation) => {
  let errorMessages;
  let data;
  const hasError = !resultValidation.success;

  if(hasError) errorMessages = JSON.parse(resultValidation.error.message);
  if(!hasError) data = resultValidation.data

  return {
    hasError,
    errorMessages,
    data
  }
}

