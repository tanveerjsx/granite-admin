import Joi from "joi-browser";

export const couponSchema = {
  code: Joi.number()
    .min(5)
    .required()
    .label("Code"),
  type: Joi.string()
    .required()
    .label("Type"),
  amount: Joi.number()
    .required()
    .label("Amount"),
  usagelimit: Joi.string()
    .min(10)
    .required()
    .label("Usage Limit"),
  date: Joi.string()
    .min(5)
    .required()
    .label("Date")
};
