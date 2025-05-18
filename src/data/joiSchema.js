import Joi from "joi";

const schema = Joi.object({
  img: Joi.string().required().uri(),

  name: Joi.string().min(3).max(30).required(),

  description: Joi.string().required(),

  category: Joi.string().required().max(80),

  price: Joi.number().required().min(1),

  discount: Joi.number().max(100),
});

export { schema };
