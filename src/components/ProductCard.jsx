// src/components/ProductCard.jsx
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </Link>
      <h3 className="product-card__title">{product.name}</h3>
      <p className="product-card__price">AED {product.price}</p>
      <button
        className="btn"
        type="button"
        onClick={() => onAddToCart(product)}
      >
        Add to cart
      </button>
    </div>
  );
}
