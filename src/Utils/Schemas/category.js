import Joi from "joi-browser";

export const categorySchema = {
  name: Joi.string()
    .required()
    .label("Category")
};
