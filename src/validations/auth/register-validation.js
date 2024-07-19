import Joi from "joi";

export const registerSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  username: Joi.string().min(3).max(255).required(),
  email: Joi.string()
    .email({
      tlds: {
        allow: ["com", "net", "org"],
      },
    })
    .required(),
  password: Joi.string().min(6).required(),
  rePassword: Joi.ref("password"),
});
