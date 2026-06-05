import styles from './Projects.module.css';

const projects = [
  {
    title: 'Business Landing Page',
    desc: 'A fully responsive landing page for a SaaS product with smooth scroll and mobile-first design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'ti-layout-2',
    color: 'green',
    live: '#',
    github: '#',
  },
  {
    title: 'Task Manager App',
    desc: 'A React-based to-do app with filtering, local storage persistence, and dark mode toggle.',
    tags: ['React', 'Hooks', 'LocalStorage'],
    icon: 'ti-list-check',
    color: 'blue',
    live: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    desc: 'Fetches real-time weather data from an API and displays it with dynamic UI changes based on conditions.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    icon: 'ti-cloud',
    color: 'purple',
    live: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <p className="section-label">Selected work</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={`${styles.thumb} ${styles[project.color]}`}>
                <i className={`ti ${project.icon}`} aria-hidden="true"></i>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.desc}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.links}>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <i className="ti ti-external-link" aria-hidden="true"></i> Live demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="ti ti-brand-github" aria-hidden="true"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
