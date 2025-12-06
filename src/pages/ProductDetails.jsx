// src/pages/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="section">
        <h1>Product not found</h1>
        <Link to="/products" className="btn">
          Back to products
        </Link>
      </main>
    );
  }

  return (
    <main className="section product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-details__image"
      />
      <div>
        <h1>{product.name}</h1>
        <p className="product-details__price">AED {product.price}</p>
        <p>{product.description}</p>
        <button className="btn" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </main>
  );
}
