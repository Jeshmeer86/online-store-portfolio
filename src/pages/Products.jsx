// src/pages/Products.jsx
import { useState, useMemo } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    // if search is empty, show all
    if (!term) return products;

    return products.filter((p) => {
      // join fields you want to search through
      const searchable = [
        p.name,
        p.description,
        p.productDetails,
        p.manufacturer,
      ]
        .filter(Boolean) // remove undefined/null
        .join(" ")
        .toLowerCase();

      return searchable.includes(term);
    });
  }, [searchTerm]);

  return (
    <main className="section">
      <div className="products-header">
        <h1>All Products</h1>

        <div className="products-toolbar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, brand, or details..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="muted-text">
          No products match <strong>"{searchTerm}"</strong>.
        </p>
      ) : (
        <div className="grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
          ))}
        </div>
      )}
    </main>
  );
}
