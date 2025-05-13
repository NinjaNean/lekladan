import Joi from "joi";

const schema = Joi.object({
  img: Joi.string().required().uri(),

  name: Joi.string().min(3).max(30).required(),

  description: Joi.string().required(),

  category: Joi.string().required(),

  price: Joi.number().required().min(1),

  discount: Joi.number().max(100),
});

function handleSubmit(toyData) {
  let css = {
    img: "",
    name: "",
    description: "",
    category: "",
    price: "",
    discount: "",
  };

  let message = {
    img: "",
    name: "",
    description: "",
    category: "",
    price: "",
    discount: "",
  };

  const results = schema.validate(toyData);

  if (results.error) {
    results.error.details.forEach((e) => {
      const context = e.context.key;

      css[context] = "invalid";

      if (context === "img") {
        message.img = "Lägg till en bild";
      } else if (context === "name") {
        message.name = "Fyll i produktens namn";
      } else if (context === "description") {
        message.description = "Fyll i beskrivning";
      } else if (context === "category") {
        message.category = "Välj en kategori";
      } else if (context === "price") {
        message.price = "Priset kan inte vara 0";
      } else if (context === "discount") {
        message.discount = "Rabatten kan inte vara mer än 100%";
      }
    });
  }

  const formIsValid = !results.error;
  return { css, message, formIsValid };
}

export { handleSubmit };
