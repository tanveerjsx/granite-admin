import Joi from "joi-browser";

export const productSchema = {
  name: Joi.string()
    .min(5)
    .required()
    .label("Product name"),
  price: Joi.number()
    .required()
    .label("Price"),
  stock: Joi.number()
    .required()
    .label("Stock"),
  description: Joi.string()
    .min(10)
    .required()
    .label("Desciption"),
  sku: Joi.string()
    .min(5)
    .required()
    .label("SKU"),
  color: Joi.string()
    .required()
    .label("Color"),
  category: Joi.string()
    .required()
    .label("Category"),
  finalPrice: Joi.number(),
  productPic: Joi.required(),
  vendor: Joi.string().required()
};
