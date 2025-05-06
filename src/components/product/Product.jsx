import "./product.css";
import { useMenuStore } from "../../data/store";

function Product({ toy }) {
  const { addToCart } = useMenuStore();

  return (
    <div className="toy">
      {toy.discount > 0 && <p className="discount">{toy.discount}%</p>}
      <img src={toy.img} alt="" />
      <h1>{toy.name}</h1>
      <p>{toy.description}</p>
      <div className="toy-flex">
        <button onClick={() => addToCart(toy)}>Lägg till</button>
        <div>
          {toy.oldPrice > 0 && <p className="old-price">{toy.oldPrice}:-</p>}
          <p>{toy.price}:-</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
