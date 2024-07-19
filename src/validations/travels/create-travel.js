import Joi from "joi";

export const createTravelSchema = Joi.object({
  title: Joi.string().required().min(5).max(256),
  rating: Joi.number().required().min(1).max(5),
  description: Joi.string().optional(),
  files: Joi.array(),
});
