import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <main style={{ padding: "3rem 1rem", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Thanks! ✅</h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Your message has been sent. I’ll get back to you as soon as possible.
      </p>

      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <Link to="/" className="btn">
          Back to Home
        </Link>

        <Link to="/contact" className="btn">
          Send another message
        </Link>
      </div>
    </main>
  );
}
