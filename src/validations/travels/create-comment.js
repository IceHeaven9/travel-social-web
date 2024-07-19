import Joi from "joi";

export const createCommentSchema = Joi.object({
  message: Joi.string().required().min(5).max(256),
});
