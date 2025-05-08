import React from "react";
import { useMenuStore } from "../../data/store";

function Admin() {
  const { storeToysList } = useMenuStore();
  return (
    <main className="admin-page">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Bild</th>
            <th>Namn</th>
            <th>Beskrivning</th>
            <th>Pris</th>
            <th>Rabatt</th>
          </tr>
        </thead>
        <tbody>
          {storeToysList.map((toy) => (
            <tr className="product-on-edit">
              <td className="edit-buttons">
                <p>
                  <button>Ta bort</button>
                </p>
                <button>Redigera</button>
              </td>
              <td>
                <img src={toy.img} alt="" />
              </td>
              <td>{toy.name}</td>
              <td>{toy.description}</td>
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
