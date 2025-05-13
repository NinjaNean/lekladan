import { useState } from "react";
import { handleSubmit } from "../../data/joiSchema";
import { addSummerToys, editSummerToy } from "../../data/crud";
import { useMenuStore } from "../../data/store";

function AddToyForm({ switchFormState, toy }) {
  const { setSummerToys } = useMenuStore();
  const isEdit = toy === undefined ? false : true;
  const defaultToy = toy
    ? { ...toy }
    : {
        img: "",
        name: "",
        description: "",
        category: "",
        price: 0,
        discount: 0,
      };
  delete defaultToy.id;
  delete defaultToy.oldPrice;

  const [toyData, setToyData] = useState(defaultToy);

  const [validation, setValidation] = useState({
    css: {},
    message: {},
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { css, message, formIsValid } = handleSubmit(toyData);
    setValidation({ css, message });

    if (formIsValid) {
      console.log("Submitting", toyData);

      if (isEdit) {
        editSummerToy(setSummerToys, toy.id, toyData);
      } else {
        addSummerToys(setSummerToys, toyData);
      }
      switchFormState(false);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleFormSubmit} className="add-toy">
        <h1>Lägg till en leksak</h1>

        <input
          className={validation.css.img}
          type="text"
          placeholder="Bild *"
          onChange={(e) => setToyData((prev) => ({ ...prev, img: e.target.value }))}
          value={toyData.img}
        />
        <p className="error">{validation.message.img}</p>

        <input
          className={validation.css.name}
          type="text"
          placeholder="Namn *"
          onChange={(e) => setToyData((prev) => ({ ...prev, name: e.target.value }))}
          value={toyData.name}
        />
        <p className="error">{validation.message.name}</p>

        <input
          className={validation.css.description}
          type="text"
          placeholder="Beskrivning *"
          onChange={(e) => setToyData((prev) => ({ ...prev, description: e.target.value }))}
          value={toyData.description}
        />
        <p className="error">{validation.message.description}</p>

        <select
          className={validation.css.category}
          name="category"
          onChange={(e) => setToyData((prev) => ({ ...prev, category: e.target.value }))}
        >
          <option value="" disabled>
            Kategori *
          </option>
          <option value="Uteleksaker">Uteleksaker</option>
          <option value="Till stranden">Till stranden</option>
          <option value="Vattenlek">Vattenlek</option>
          <option value="Rörelse & Sport">Rörelse & Sport</option>
        </select>
        <p className="error">{validation.message.category}</p>

        <input
          className={validation.css.price}
          type="number"
          placeholder="Pris *"
          onChange={(e) => setToyData((prev) => ({ ...prev, price: e.target.value }))}
          value={toyData.price}
        />
        <p className="error">{validation.message.price}</p>

        <input
          className={validation.css.discount}
          type="number"
          placeholder="Rabatt"
          onChange={(e) => setToyData((prev) => ({ ...prev, discount: e.target.value }))}
          value={toyData.discount}
        />
        <p className="error">{validation.message.discount}</p>

        <div className="add-toy-buttons">
          <button onClick={() => switchFormState(false)}>Avbryt</button>
          <button type="submit">Lägg till</button>
        </div>
      </form>
    </div>
  );
}

export default AddToyForm;
