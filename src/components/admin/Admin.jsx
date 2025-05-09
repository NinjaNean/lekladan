import { useState } from "react";
import { useMenuStore } from "../../data/store";
import { useNavigate } from "react-router";
import { removeSummerToy } from "../../data/crud";

function Admin() {
  const { storeToysList, switchIsLoggedIn, setSummerToys } = useMenuStore();
  const navigate = useNavigate();
  const [editToy, setEditToy] = useState(false);
  const [addToy, setAddToy] = useState(false);

  function signOut() {
    navigate("/");
    switchIsLoggedIn();
  }

  return (
    <main className="admin-page">
      <button className="admin-buttons" onClick={() => setEditToy()}>
        Redigera
      </button>
      <button className="admin-buttons" onClick={() => setAddToy(true)}>
        Lägg till
      </button>
      <button className="admin-buttons" onClick={() => signOut()}>
        Logga ut
      </button>

      {addToy && (
        <form action="" className="add-toy">
          <h1>Lägg till en leksak</h1>

          <input type="url" placeholder="Bild *" />
          <p>Felmedelande</p>

          <input type="text" placeholder="Namn *" />
          <p>Felmedelande</p>

          <input type="text" placeholder="Beskrivning *" />
          <p>Felmedelande</p>

          <select name="caregory">
            <option value="" disabled>
              Kategori *
            </option>
            <option value="">Uteleksaker</option>
            <option value="">Till stranden</option>
            <option value="">Vattenlek</option>
            <option value="">Rörelse & Sport</option>
          </select>
          <p>Felmedelande</p>

          <input type="number" placeholder="Pris *" />
          <p>Felmedelande</p>

          <input type="number" placeholder="Rabatt" />
          <p>Felmedelande</p>

          <div className="add-toy-buttons">
            <button>Lägg till</button>
            <button onClick={() => setAddToy(false)}>Avbryt</button>
          </div>
        </form>
      )}

      <table>
        <thead>
          <tr>
            <th></th>
            <th>Bild</th>
            <th>Namn</th>
            <th>Beskrivning</th>
            <th>Kategori</th>
            <th>Pris</th>
            <th>Rabatt</th>
          </tr>
        </thead>
        <tbody>
          {storeToysList.map((toy) => (
            <tr key={toy.id} className="product-on-edit">
              <td className="edit-buttons">
                <p>
                  <button onClick={() => removeSummerToy(setSummerToys, toy.id)}>Ta bort</button>
                </p>
              </td>
              <td>
                <img src={toy.img} alt="toy" />
              </td>
              <td>{toy.name}</td>
              <td>{toy.description}</td>
              <td>{toy.category}</td>
              <td>{toy.oldPrice ? toy.oldPrice : toy.price}:-</td>
              <td>{toy.discount}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Admin;
