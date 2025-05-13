import { useState } from "react";
import { useMenuStore } from "../../data/store";
import { useNavigate } from "react-router";
import AddToyForm from "./AddToyForm";
import Product from "./Product";

function Admin() {
  const { storeToysList, switchIsLoggedIn } = useMenuStore();
  const navigate = useNavigate();

  const [addToy, setAddToy] = useState(false);
  const [editToy, setEditToy] = useState(null);

  function signOut() {
    navigate("/");
    switchIsLoggedIn();
  }

  return (
    <main className="admin-page">
      <button className="admin-buttons" onClick={() => setAddToy(true)}>
        Lägg till
      </button>
      <button className="admin-buttons" onClick={() => signOut()}>
        Logga ut
      </button>

      {addToy && <AddToyForm switchFormState={setAddToy} />}
      {editToy && <AddToyForm switchFormState={setEditToy} toy={editToy} />}

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
            <Product key={toy.id} toy={toy} setEditToy={() => setEditToy(toy)} />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Admin;
