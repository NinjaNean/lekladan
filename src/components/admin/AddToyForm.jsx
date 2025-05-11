import React, { useState } from "react";
import { schema } from "../../data/joiSchema";

function AddToyForm({ setAddToy }) {
  const [toyData, setToyData] = useState({
    url: "",
    name: "",
    description: "",
    category: "",
    price: 0,
    discount: 0,
  });

  const handleSubmit = () => {
    const results = schema.validate(toyData);

    if (results.error) {
      //lägg kod för error.
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="add-toy"
    >
      <h1>Lägg till en leksak</h1>

      <input
        type="url"
        placeholder="Bild *"
        onChange={(e) => setToyData((prev) => ({ ...prev, url: e.target.value }))}
        value={toyData.url}
      />
      <p>Felmedelande</p>

      <input
        type="text"
        placeholder="Namn *"
        onChange={(e) => setToyData((prev) => ({ ...prev, name: e.target.value }))}
        value={toyData.name}
      />
      <p>Felmedelande</p>

      <input
        type="text"
        placeholder="Beskrivning *"
        onChange={(e) => setToyData((prev) => ({ ...prev, description: e.target.value }))}
        value={toyData.description}
      />
      <p>Felmedelande</p>

      <select name="category" onChange={(e) => setToyData((prev) => ({ ...prev, category: e.target.value }))}>
        <option value="" disabled>
          Kategori *
        </option>
        <option value="outside">Uteleksaker</option>
        <option value="beach">Till stranden</option>
        <option value="water">Vattenlek</option>
        <option value="sport">Rörelse & Sport</option>
      </select>
      <p>Felmedelande</p>

      <input
        type="number"
        placeholder="Pris *"
        onChange={(e) => setToyData((prev) => ({ ...prev, price: e.target.value }))}
        value={toyData.price}
      />
      <p>Felmedelande</p>

      <input
        type="number"
        placeholder="Rabatt"
        onChange={(e) => setToyData((prev) => ({ ...prev, discount: e.target.value }))}
        value={toyData.discount}
      />
      <p>Felmedelande</p>

      <div className="add-toy-buttons">
        <button onClick={() => setAddToy(false)}>Avbryt</button>
        <button type="submit">Lägg till</button>
      </div>
    </form>
  );
}

export default AddToyForm;
