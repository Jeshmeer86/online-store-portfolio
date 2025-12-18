// src/components/Footer.jsx
import { useLocation, NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  const { pathname } = useLocation();
  const inStore = pathname.startsWith("/store");

  const title = inStore
    ? siteConfig.storeName || "Fundi Products Store"
    : "Jeshmeer Maharajh";

  const tagline = inStore
    ? siteConfig.tagline || "Shop our latest hardware products with ease"
    : "Full Stack Developer • Security-aware (AppSec-leaning)";

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <div className="footer__title">{title}</div>
          <p className="footer__tagline muted">{tagline}</p>
        </div>

        <div className="footer__links">
          <NavLink to="/">Portfolio</NavLink>
          <NavLink to="/store">Store</NavLink>
          <a href="mailto:youremail@example.com">Email</a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="footer__bottom muted">
        © {year} • Built by Jeshmeer the Great • React + Vite
      </div>
    </footer>
  );
}
