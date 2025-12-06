// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <a
          href={siteConfig.brand.href}
          data-discover={siteConfig.brand.dataDiscover ? "true" : "false"}
        >
          {siteConfig.brand.text}
        </a>
      </div>
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}
