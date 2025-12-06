// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <h1>{siteConfig.storeName}</h1>
          <p>{siteConfig.tagline}</p>
          <Link to="/products" className="btn">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="section section--about">
        <h2>About this Store Template</h2>
        <p>
          This is my base online store template that I customize for each
          client. I adjust the products, colors, branding and layout to fit your
          business.
        </p>
        <ul>
          <li>✅ Fully responsive and mobile-friendly</li>
          <li>✅ Fast React front-end with clean structure</li>
          <li>✅ Easy to change products, prices and content</li>
          <li>✅ Perfect starting point for serious online shops</li>
        </ul>
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
