import { Link } from "react-router-dom";
import { projects } from "../data/projects"; // ✅ adjust if your path differs

export default function ProjectsIndex() {
  console.log("projects:", projects); // ✅ check in browser console

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>Projects</h1>

      <div style={{ display: "grid", gap: 16 }}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            style={{
              textDecoration: "none",
              border: "1px solid #333",
              borderRadius: 12,
              padding: 16,
              color: "inherit",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 20 }}>{p.title}</h2>
            <p style={{ margin: "8px 0 0", opacity: 0.8 }}>{p.subtitle}</p>
            <p style={{ margin: "10px 0 0", opacity: 0.8 }}>
              <strong>Stack:</strong> {p.stack.join(", ")}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
