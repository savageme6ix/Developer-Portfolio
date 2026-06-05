import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.dot}></span>
              Open to freelance work
            </div>
            <h1 className={styles.heading}>
              Shaping Concepts<br />
              into Real Projects<br />
              that <span>Deliver Results</span>
            </h1>
            <p className={styles.sub}>
              I build clean, fast, and responsive web experiences using React, HTML/CSS,
              and JavaScript. Based in Nairobi — working with clients globally.
            </p>
            <div className={styles.ctaRow}>
              <a href="#projects" className="btn-primary">View my work &rarr;</a>
              <a href="#contact" className="btn-outline">Get in touch</a>
            </div>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.decorCard}>
              <svg viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="40" width="120" height="120" rx="16" fill="var(--teal-light)" stroke="var(--teal)" strokeWidth="1.5" />
                <circle cx="200" cy="80" r="48" fill="var(--teal-light)" stroke="var(--teal)" strokeWidth="1.5" />
                <rect x="60" y="200" width="200" height="80" rx="14" fill="var(--bg-secondary)" stroke="var(--border)" strokeWidth="1.5" />
                <line x1="90" y1="230" x2="230" y2="230" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" />
                <line x1="90" y1="250" x2="190" y2="250" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" />
                <polygon points="140,40 180,100 100,100" fill="var(--teal)" opacity="0.25" />
                <circle cx="80" cy="100" r="8" fill="var(--teal)" />
                <circle cx="200" cy="240" r="6" fill="var(--teal-dark)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
