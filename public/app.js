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
              Tushar Birajdar
              <span> software engineer building practical systems.</span>
            </h1>
            <p className="hero-text">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Selected Work
              </a>
              <a className="button button-secondary" href="/resume">
                Resume
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel-block">
              <p className="section-label">Currently</p>
              <h2>Bitwise</h2>
              <p>Programmer Trainee building ETL pipelines and analytics workflows.</p>
            </div>
            <div className="hero-panel-block">
              <p className="section-label">Education</p>
              <h3>{portfolio.education.school}</h3>
              <p>{portfolio.education.degree}</p>
              <p>{portfolio.education.duration}</p>
            </div>
          </aside>
        </section>

        <section className="section stat-strip">
          {portfolio.stats.map((stat) => (
            <article className="stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="section split-section" id="about">
          <div className="section-heading sticky-title">
            <p className="section-label">About</p>
            <h2>Focused on shipping clean, useful software.</h2>
          </div>
          <div className="stacked-copy">
            {portfolio.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="outline-card">
              <p className="mini-label">Core Areas</p>
              <div className="chip-list">
                <span>Data Engineering</span>
                <span>React</span>
                <span>Node.js</span>
                <span>PySpark</span>
                <span>Automation</span>
                <span>System Design</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Work across analytics, automation, and product engineering.</h2>
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
            <h2>Selected work with real-time interaction and product thinking.</h2>
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
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={`${project.name}-${link.url}`} href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section split-section">
          <div className="section-heading sticky-title">
            <p className="section-label">Highlights</p>
            <h2>Recognition through coding, projects, and leadership.</h2>
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
            <h2>Tools and technologies I use regularly.</h2>
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
            <h2>Open to useful work and ambitious teams.</h2>
            <p>
              I&apos;m interested in software engineering, data engineering, and
              product-focused developer roles.
            </p>
          </div>

          <div className="contact-card">
            <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a>
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
