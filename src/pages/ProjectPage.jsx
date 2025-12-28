import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="section">
        <h1>Project not found</h1>
        <p className="muted">That link doesn’t match any project.</p>
        <Link className="btn btn--outline" to="/projects">
          Back to Projects
        </Link>
      </main>
    );
  }

  const { title, subtitle, screenshot, stack, liveUrl, githubUrl, caseStudy } =
    project;

  return (
    <main className="section">
      <div className="project-page">
        <div className="project-page__header">
          <div>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <p className="muted" style={{ marginTop: "0.35rem" }}>
              {subtitle}
            </p>

            <div className="chips" style={{ marginTop: "0.75rem" }}>
              {stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            <div className="portfolio__cta" style={{ marginTop: "1rem" }}>
              <Link className="btn btn--outline" to="/projects">
                Back
              </Link>
              {liveUrl ? (
                <a
                  className="btn"
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : null}
              {githubUrl ? (
                <a
                  className="btn btn--outline"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </div>

          <div className="project-page__media">
            <img src={screenshot} alt={title} />
          </div>
        </div>

        <section className="case-study">
          <h2>Case Study</h2>

          <div className="case-study__grid">
            <div className="card">
              <h3>Problem</h3>
              <p>{caseStudy.problem}</p>
            </div>

            <div className="card">
              <h3>Solution</h3>
              <p>{caseStudy.solution}</p>
            </div>

            <div className="card">
              <h3>Results</h3>
              <ul className="case-study__list">
                {caseStudy.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
