// src/pages/Home.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [heroSearch, setHeroSearch] = useState("");

  function handleHeroSearch(e) {
    e.preventDefault();
    const term = heroSearch.trim();

    if (!term) {
      // If empty, just go to products page
      navigate("/store/products");
    } else {
      // Go to products page with the search term in the URL
      navigate(`/store/products?search=${encodeURIComponent(term)}`);
    }
  }

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <h1>{siteConfig.storeName}</h1>
          <p>{siteConfig.tagline}</p>

          {/* Shop button */}
          <Link to="/store/products" className="btn">
            Shop Now
          </Link>

          {/* NEW: Search bar under the Shop button */}
          <form className="hero__search" onSubmit={handleHeroSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search products..."
              value={heroSearch}
              onChange={(e) => setHeroSearch(e.target.value)}
            />
            <button type="submit" className="btn btn--outline">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="section section--about">
        <h2>About this store template</h2>
        <p>
          This is my base online store template that I customize for each
          client. It includes a clean structure, product pages, cart flow, and
          search.
        </p>
        {/*<ul>
          <li>✅ Fully responsive and mobile-friendly</li>
          <li>✅ Fast React front-end with clean structure</li>
          <li>✅ Easy to change products, prices and content</li>
          <li>✅ Perfect starting point for serious online shops</li>
        </ul>*/}
      </section>

      <section className="section">
        <h2>Featured Products</h2>
        <div className="grid">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={addToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}
