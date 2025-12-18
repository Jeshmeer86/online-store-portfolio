// src/components/Navbar.jsx
import { NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();
  const location = useLocation();

  const inStore = location.pathname.startsWith("/store");

  const brand = inStore ? siteConfig.storeBrand : siteConfig.portfolioBrand;

  const linkClass = ({ isActive }) =>
    isActive ? "navbar__link navbar__link--active" : "navbar__link";

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <NavLink
          to={brand.href}
          className="navbar__brand"
          data-discover={brand.dataDiscover ? "true" : "false"}
        >
          {brand.text}
        </NavLink>
      </div>

      <nav className="navbar__links">
        {/* Always visible top-level tabs */}
        <NavLink to="/" className={linkClass} end>
          Portfolio
        </NavLink>

        <NavLink to="/store" className={linkClass}>
          Store
        </NavLink>

        {/* Store-only links */}
        {inStore && (
          <>
            <NavLink to="/store/products" className={linkClass}>
              Shop
            </NavLink>

            <NavLink to="/store/cart" className={linkClass}>
              Cart ({totalItems})
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
