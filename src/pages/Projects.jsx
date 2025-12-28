import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="section">
      <div className="products-header">
        <h1>Projects</h1>
        <p className="muted" style={{ margin: 0 }}>
          Real builds with live demos, code, and case studies.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p.slug} className="project-card">
            <Link to={`/projects/${p.slug}`} className="project-card__media">
              <img src={p.screenshot} alt={p.title} />
            </Link>

            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="muted">{p.subtitle}</p>

              <div className="chips">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              <div className="project-card__actions">
                <Link className="btn btn--outline" to={`/projects/${p.slug}`}>
                  Case Study
                </Link>

                {p.liveUrl ? (
                  <a
                    className="btn"
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                ) : null}

                {p.githubUrl ? (
                  <a
                    className="btn btn--outline"
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
