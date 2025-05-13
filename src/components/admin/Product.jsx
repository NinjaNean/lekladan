import { removeSummerToy } from "../../data/crud";
import { useMenuStore } from "../../data/store";

function Product({ toy, setEditToy }) {
  const { setSummerToys } = useMenuStore();

  return (
    <tr className="product-on-edit">
      <td className="edit-buttons">
        <p>
          <button onClick={() => removeSummerToy(setSummerToys, toy.id)}>Ta bort</button>
        </p>
        <p>
          <button onClick={() => setEditToy()}>Redigera</button>
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
  );
}

export default Product;
