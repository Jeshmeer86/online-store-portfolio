import { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export default function ProductCard({ product, onAddToCart }) {
  const [imgError, setImgError] = useState(false);

  const src =
    !imgError && product.image ? product.image : "/images/placeholder.svg"; // fallback

  return (
    <article className="product-card">
      <Link
        to={`/store/products/${product.id}`}
        className="product-card__media"
      >
        <img
          src={src}
          alt={product.name}
          onError={() => setImgError(true)}
          loading="lazy"
        />
      </Link>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>

        <p className="product-card__meta">
          <span className="product-card__price">
            {siteConfig.currency} {product.price}
          </span>
          {product.manufacturer ? (
            <span className="product-card__brand">{product.manufacturer}</span>
          ) : (
            <span className="product-card__brand"> </span>
          )}
        </p>

        {product.description ? (
          <p className="product-card__desc">{product.description}</p>
        ) : null}

        <div className="product-card__actions">
          <Link
            className="btn btn--outline"
            to={`/store/products/${product.id}`}
          >
            Details
          </Link>

          <button
            className="btn"
            type="button"
            onClick={() => onAddToCart?.(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
