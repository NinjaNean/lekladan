import { useState } from "react";
import { useMenuStore } from "../../data/store";
import { useNavigate } from "react-router";

function Admin() {
  const { storeToysList, removeSummerToy, addSummerToys, switchIsLoggedIn, setSummerToys } = useMenuStore();
  const navigate = useNavigate();
  const [editToy, setEditToy] = useState(false);

  function signOut() {
    navigate("/");
    switchIsLoggedIn();
  }

  return (
    <main className="admin-page">
      <button className="admin-buttons" onClick={() => setEditToy()}>
        Redigera
      </button>
      <button className="admin-buttons">Lägg till</button>
      <button className="admin-buttons" onClick={() => signOut()}>
        Logga ut
      </button>
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
                <img src={toy.img} alt="" />
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
