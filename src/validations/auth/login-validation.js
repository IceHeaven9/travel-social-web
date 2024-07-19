import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      tlds: {
        allow: ["com", "net", "org"],
      },
    })
    .required()
    .messages({
      "any.empty": "El email no puede estar vacío",
    }),
  password: Joi.string().min(6).required(),
});
