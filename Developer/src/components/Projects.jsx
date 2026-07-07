import { motion } from 'framer-motion';
import styles from './Projects.module.css';
import ProjectLogo from './ProjectLogo';
import ScrollReveal, { staggerContainer, staggerItem } from './ScrollReveal';

const GITHUB = 'https://github.com/savageme6ix';

const projects = [
  {
    title: '6ix Essence — Perfume Store',
    desc: 'A luxury ecommerce perfume storefront with product browsing, cart flow, and a polished mobile-first shopping experience.',
    tags: ['React', 'Ecommerce', 'Vercel'],
    logo: 'perfume',
    color: 'purple',
    live: 'https://6ix-essence-omega.vercel.app/',
    github: GITHUB,
  },
  {
    title: 'AI Resume Analyser',
    desc: 'An AI-powered tool that reviews resumes, scores job fit, and gives actionable feedback to strengthen applications.',
    tags: ['React', 'AI', 'Vercel'],
    logo: 'resume',
    color: 'blue',
    live: 'https://job-application-tracker-five-sandy.vercel.app/',
    github: GITHUB,
  },
  {
    title: 'Movie Discovery App',
    desc: 'Browse trending films, search titles, and explore details with a clean interface powered by movie API data.',
    tags: ['React', 'REST API', 'Vercel'],
    logo: 'movie',
    color: 'rose',
    live: 'https://movie-app-one-pi-33.vercel.app/',
    github: GITHUB,
  },
  {
    title: 'Ecommerce Sales Website',
    desc: 'A full ecommerce replica with product listings, cart functionality, and Amazon-inspired UI patterns.',
    tags: ['React', 'Ecommerce', 'CSS'],
    logo: 'amazon',
    color: 'amber',
    live: 'https://ecommerce-sales-zeta.vercel.app/',
    github: GITHUB,
  },
  {
    title: 'Recipe Website',
    desc: 'Discover and explore recipes with search, categories, and detailed cooking instructions in a warm, inviting layout.',
    tags: ['React', 'API', 'Vercel'],
    logo: 'recipe',
    color: 'green',
    live: 'https://recipe-website-kappa-nine.vercel.app/',
    github: GITHUB,
  },
  {
    title: 'Job Application Tracker',
    desc: 'Track job applications, statuses, and follow-ups in one organised dashboard built for active job seekers.',
    tags: ['React', 'Dashboard', 'Vercel'],
    logo: 'job',
    color: 'slate',
    live: 'https://job-application-tracker-two-alpha.vercel.app/',
    github: GITHUB,
  },
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">Selected work</p>
        </ScrollReveal>
        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className={styles.card}
              variants={staggerItem}
            >
              <div className={`${styles.thumb} ${styles[project.color]}`}>
                <ProjectLogo type={project.logo} />
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
