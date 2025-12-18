export default function PortfolioHome() {
  return (
    <main className="portfolio">
      {/* HERO */}
      <section className="portfolio__hero">
        <div className="portfolio__hero-inner">
          <div>
            <h1>Jeshmeer Maharajh</h1>
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

        <article className="project">
          <h3>Fundi Products Store</h3>
          <p>
            E-commerce template: product listing, search, cart, checkout flow,
            and clean routing under /store.
          </p>
          <p className="muted">React • Vite • Context API • React Router</p>

          <div className="portfolio__cta">
            <a
              className="btn btn--outline"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
            <a
              className="btn btn--outline"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>

        <article className="project">
          <h3>Node/Express REST API</h3>
          <p>
            REST API with validation, error handling, and a foundation for JWT
            auth + role-based access.
          </p>
          <p className="muted">Node • Express • MongoDB • Postman</p>

          <div className="portfolio__cta">
            <a
              className="btn btn--outline"
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </article>
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
        <p>Dubai • Open to Junior Full Stack roles (Security-aware)</p>
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
            href="www.linkedin.com/in/jeshmeer-maharajh-802678222"
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
