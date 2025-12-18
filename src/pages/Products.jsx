// src/pages/Products.jsx
import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const { addToCart } = useCart();

  // Read ?search=... from the URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialSearch = params.get("search") ?? "";

  // Start searchTerm with whatever is in the URL (or empty string)
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // Keep searchTerm in sync if the URL changes (e.g. navigating again from Home)
  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

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
          <button
            className="btn btn--outline"
            type="button"
            onClick={() => setSearchTerm("")}
          >
            Clear
          </button>
        </div>
      </div>
      <p className="muted" style={{ marginTop: 0, marginBottom: "0.75rem" }}>
        Showing <strong>{filteredProducts.length}</strong> of{" "}
        <strong>{products.length}</strong> products
      </p>

      <div className="products-panel">
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
      </div>
    </main>
  );
}
