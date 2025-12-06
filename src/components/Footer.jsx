// src/components/Footer.jsx
import { siteConfig } from "../config/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {year} {siteConfig.storeName}. Built by Jeshmeer the Great.
      </p>
    </footer>
  );
}
