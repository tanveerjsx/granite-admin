import Joi from "joi-browser";

export const loginSchema = {
  email: Joi.string()
    .email()
    .required()
    .label("Email"),
  password: Joi.string()
    .min(4)
    .required()
    .label("Password")
};
