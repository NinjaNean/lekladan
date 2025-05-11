import Joi from "joi";

const schema = Joi.object({
  url: Joi.string().required().uri(),

  name: Joi.string().min(3).max(30).required(),

  description: Joi.string().required(),

  category: Joi.string().required(),

  price: Joi.number().required(),

  discount: Joi.number().max(100),
});

export { schema };
