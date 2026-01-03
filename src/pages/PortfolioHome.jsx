import ContactForm from "../components/ContactForm";

const certifications = [
  {
    title: "Full-Stack Developer",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-full-stack.pdf",
  },
  {
    title: "Back-End Developer",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-back-end.pdf",
  },
  {
    title: "Front-End Developer",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-front-end.pdf",
  },
  {
    title: "Python Developer",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-python-dev.pdf",
  },
  {
    title: "JavaScript",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-javascript.pdf",
  },
  {
    title: "TypeScript",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-typescript.pdf",
  },
  {
    title: "React",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-react.pdf",
  },
  {
    title: "SQL",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-sql.pdf",
  },
  {
    title: "HTML",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-html.pdf",
  },
  {
    title: "CSS",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-css.pdf",
  },
  {
    title: "Python",
    provider: "Mimo",
    status: "Completed",
    href: "/certificates/mimo-python.pdf",
  },
  /*{
    title: "Game Dev with AI",
    provider: "Mimo",
    status: "In progress (33%)",
    href: "/certificates/mimo-game-dev-ai-33.png",
  },*/
];

const projects = [
  {
    title: "Fundi Products Store",
    description:
      "E-commerce template: product listing, search, cart, checkout flow, and clean routing under /store.",
    stack: "React • Vite • Context API • React Router",
    liveUrl: "", // add later to update all my projects
    githubUrl: "", // add later to update all my projects
  },
  {
    title: "Node/Express REST API",
    description:
      "REST API with validation, error handling, and a foundation for JWT auth + role-based access.",
    stack: "Node • Express • MongoDB • Postman",
    githubUrl: "", // add later
  },
];

export default function PortfolioHome() {
  return (
    <main className="portfolio">
      {/* COMPANY DETAILS */}
      <section className="portfolio__hero-company">
        <div className="portfolio__hero-company-inner ">
          <h1>Jeshmeer International</h1>
          <h2>A Software Engineering Company</h2>
          <p>Where ideas become systems</p>
        </div>
      </section>

      {/* HERO */}
      <section className="portfolio__hero">
        <div className="portfolio__hero-inner">
          <div className="portfolio__hero-text">
            <h1>Jeshmeer Maharajh</h1>
            <h2>Software Developer</h2>
            <p className="muted">
              Full Stack Developer • Security-aware (AppSec-leaning)
            </p>
            <p>
              I build React + Node web apps with a security mindset; because
              most breaches start in apps: auth mistakes, insecure APIs, bad
              secrets handling, and risky dependencies.
            </p>
            <div className="portfolio__cta">
              <a className="btn" href="#projects">
                View Projects
              </a>
              <a
                className="btn btn--outline"
                href="mailto:jesasolutions@yahoo.com"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="portfolio__avatar-wrap">
            <img
              className="portfolio__avatar"
              src="/images/jeshmeerPic.jpeg"
              alt="Jeshmeer Maharajh"
            />
          </div>
        </div>
      </section>

      {/* QUICK PROOF */}
      <section className="portfolio__proof">
        <div className="card">
          <h3>What I ship</h3>
          <p>
            Deployed apps with routing, CRUD, auth-ready structure, and clean
            UI.
          </p>
        </div>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="portfolio__certs">
          <h2>Certifications</h2>
          <p className="muted">
            Through my structured learning (Mimo) + continuous growth.
          </p>

          <div className="portfolio__certs-grid">
            {certifications.map((c) => (
              <div className="card" key={`${c.provider}-${c.title}`}>
                <h3 style={{ marginBottom: 6 }}>{c.title}</h3>
                <p className="muted" style={{ marginTop: 0 }}>
                  {c.provider} • {c.status}
                </p>

                {c.href ? (
                  <a
                    className="btn btn--outline"
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                ) : (
                  <p className="muted">Link available on request</p>
                )}
              </div>
            ))}
          </div>
        </section>
        <div className="card">
          <h3>Stack</h3>
          <p>React, Vite, Node/Express, MongoDB/PostgreSQL, REST APIs.</p>
        </div>
        <div className="card">
          <h3>Security focus</h3>
          <p>
            OWASP-aware: input validation, auth pitfalls, secrets, dependencies.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="portfolio__projects">
        <h2>Featured Projects</h2>

        {projects.map((p) => {
          const hasLinks = Boolean(p.liveUrl || p.githubUrl);

          return (
            <article className="project" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="muted">{p.stack}</p>

              {hasLinks ? (
                <div className="portfolio__cta">
                  {p.liveUrl ? (
                    <a
                      className="btn btn--outline"
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
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
              ) : (
                <p className="muted" style={{ margin: 0 }}>
                  Links coming soon
                </p>
              )}
            </article>
          );
        })}
      </section>

      {/* SKILLS */}
      <section className="portfolio__skills">
        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React, Vite, HTML, CSS, JavaScript
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express, REST APIs
          </li>
          <li>
            <strong>Databases:</strong> MongoDB (and learning PostgreSQL)
          </li>
          <li>
            <strong>Tools:</strong> Git/GitHub, npm, Netlify/Vercel
          </li>
          <li>
            <strong>Security:</strong> OWASP basics, validation, auth pitfalls,
            dependency hygiene
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="portfolio__contact">
        <h2>Contact</h2>
        <p className="muted">
          Dubai • Open to Full Stack / Frontend roles (Security-aware)
        </p>
        <ContactForm />
      </section>
      <section>
        <div className="portfolio__cta">
          <a className="btn" href="mailto:jesasolutions@yahoo.com">
            Email
          </a>
          <a
            className="btn btn--outline"
            href="https://github.com/Jeshmeer86"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn--outline"
            href="https://www.linkedin.com/in/jeshmeer-maharajh-802678222"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
