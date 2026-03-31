const { useEffect, useState } = React;

function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) {
          throw new Error("Failed to load portfolio data.");
        }
        const data = await response.json();
        setPortfolio(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadPortfolio();
  }, []);

  if (error) {
    return (
      <main className="state-screen">
        <h1>Something went wrong</h1>
        <p>{error}</p>
      </main>
    );
  }

  if (!portfolio) {
    return (
      <main className="state-screen">
        <h1>Loading portfolio...</h1>
      </main>
    );
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          TB
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">{portfolio.title}</p>
            <h1>
              {portfolio.name.split(" ")[0]} <span>{portfolio.name.split(" ").slice(1).join(" ")}</span>{" "}
              builds fast, practical products with clean engineering behind them.
            </h1>
            <p className="hero-text">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a className="button button-secondary" href="/resume">
                Download Resume
              </a>
            </div>
          </div>

          <aside className="hero-card">
            {portfolio.stats.map((stat) => (
              <div className="hero-stat" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </aside>
        </section>

        <section className="section about-grid" id="about">
          <div>
            <p className="section-label">About</p>
            <h2>A builder who likes both systems and speed.</h2>
          </div>
          <div className="about-copy">
            {portfolio.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Industry experience across data workflows and automation.</h2>
          </div>

          <div className="timeline">
            {portfolio.experience.map((job) => (
              <article className="timeline-item" key={`${job.company}-${job.role}`}>
                <div className="timeline-meta">
                  <p>{job.duration}</p>
                  <span>{job.location}</span>
                </div>
                <div className="timeline-content">
                  <h3>
                    {job.role} · {job.company}
                  </h3>
                  <p>{job.description}</p>
                  <ul>
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-label">Projects</p>
            <h2>Selected work across collaboration, mobile, and real-time systems.</h2>
          </div>

          <div className="project-grid">
            {portfolio.projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span>{project.date}</span>
                  <span>{project.stack}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section metrics-section">
          <div className="section-heading">
            <p className="section-label">Highlights</p>
            <h2>Competitive coding, recognition, and leadership.</h2>
          </div>

          <div className="metrics-grid">
            {portfolio.achievements.map((achievement) => (
              <article className="metric-card" key={achievement.title}>
                <strong>{achievement.title}</strong>
                <p>{achievement.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section">
          <div className="section-heading">
            <p className="section-label">Skills</p>
            <h2>Tools and technologies I work with.</h2>
          </div>

          <div className="skills-list">
            {portfolio.skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3>{skillGroup.category}</h3>
                <p>{skillGroup.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-label">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              I&apos;m interested in software engineering, data engineering, and
              product-focused developer roles.
            </p>
          </div>

          <div className="contact-card">
            <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
            <a href={`tel:${portfolio.contact.phone.replace(/\s+/g, "")}`}>
              {portfolio.contact.phone}
            </a>
            <a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={portfolio.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
